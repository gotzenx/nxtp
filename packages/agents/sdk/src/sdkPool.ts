/* eslint-disable @typescript-eslint/no-inferrable-types */
import { providers, BigNumber, BigNumberish, constants, utils } from "ethers";
import { getChainData, Logger, createLoggingContext, ChainData, DEFAULT_ROUTER_FEE } from "@connext/nxtp-utils";
import { contractDeployments } from "@connext/nxtp-txservice";
import memoize from "memoizee";

import { NxtpSdkConfig, getConfig, AssetDescription } from "./config";
import { SignerAddressMissing, ChainDataUndefined } from "./lib/errors";
import { IPoolStats, IPoolData } from "./interfaces";
import { PriceFeed } from "./lib/priceFeed";
import { NxtpSdkShared } from "./sdkShared";

export class Pool implements IPoolData {
  domainId: string;
  name: string;
  symbol: string; // in the form of <TKN>-next<TKN>
  tokens: string[]; // index order specified when the pool was initialized
  tokenIndices: Map<string, number>; // maps token to its index in the pool
  decimals: number[];
  balances: BigNumber[];
  lpTokenAddress: string;
  canonicalHash: string; // hash of the domain and canonicalId
  address?: string; // no address if internal pool

  constructor(
    domainId: string,
    name: string,
    symbol: string,
    tokens: string[],
    tokenIndices: Map<string, number>,
    decimals: number[],
    balances: BigNumber[],
    lpTokenAddress: string,
    canonicalHash: string,
    address?: string,
  ) {
    this.domainId = domainId;
    this.name = name;
    this.symbol = symbol;
    this.tokens = tokens;
    this.tokenIndices = tokenIndices;
    this.decimals = decimals;
    this.balances = balances;
    this.lpTokenAddress = lpTokenAddress;
    this.canonicalHash = canonicalHash;
    this.address = address;
  }

  async getLiquidity(): Promise<string> {
    // TODO: get this from cartographer
    return "100";
  }

  async getVolume(): Promise<string> {
    // TODO: get this from cartographer
    return "100";
  }

  async getFees(): Promise<string> {
    // TODO: get this from cartographer
    return "100";
  }

  async getApy(): Promise<{ week: string; month: string; year: string; total: string }> {
    // TODO: get this from cartographer
    return {
      week: "100",
      month: "100",
      year: "100",
      total: "100",
    };
  }
}

/**
 * @classdesc SDK class encapsulating stableswap pool functions.
 * @dev This class will either interact with internal StableSwapFacet pools or external StableSwap pools
 *      depending on which type of pool is being used for each asset.
 *      Note: SDK currently only supports internal StableSwapFacet pools.
 *
 */
export class NxtpSdkPool extends NxtpSdkShared {
  private static _instance: NxtpSdkPool;
  private readonly priceFeed: PriceFeed;

  constructor(config: NxtpSdkConfig, logger: Logger, chainData: Map<string, ChainData>) {
    super(config, logger, chainData);
    this.priceFeed = new PriceFeed();
  }

  static async create(
    _config: NxtpSdkConfig,
    _logger?: Logger,
    _chainData?: Map<string, ChainData>,
  ): Promise<NxtpSdkPool> {
    const chainData = _chainData ?? (await getChainData());
    if (!chainData) {
      throw new ChainDataUndefined();
    }

    const nxtpConfig = await getConfig(_config, contractDeployments, chainData);

    const logger = _logger
      ? _logger.child({ name: "NxtpSdkPool" })
      : new Logger({ name: "NxtpSdkPool", level: nxtpConfig.logLevel });

    return this._instance || (this._instance = new NxtpSdkPool(nxtpConfig, logger, chainData));
  }

  // ------------------- Utils ------------------- //

  /**
   * Finds the block closest to the desired timestamp.
   * @param domainId The domain to search for the block.
   * @param unixTimestamp The unix time, in seconds.
   */
  async getBlockNumberFromUnixTimestamp(domainId: string, unixTimestamp: number): Promise<number> {
    const provider = this.getProvider(domainId);

    let min = 0;
    let max = await provider.getBlockNumber();
    let closest = Math.floor((max + min) / 2);
    let closestBlock = await provider.getBlock(closest);

    while (min <= max) {
      if (closestBlock.timestamp === unixTimestamp) {
        return closestBlock.number;
      } else if (closestBlock.timestamp > unixTimestamp) {
        max = closest - 1;
      } else {
        min = closest + 1;
      }

      closest = Math.floor((max + min) / 2);
      closestBlock = await provider.getBlock(closest);
    }

    return closestBlock.number;
  }

  /**
   * Returns the default deadline. Set to 1 hour from current time.
   */
  getDefaultDeadline(): number {
    const now = new Date();
    return now.setHours(now.getHours() + 1);
  }

  /**
   * Returns the amount of tokens received on a swap.
   * @param domainId The domain id of the pool.
   * @param tokenAddress The address of local or adopted token.
   * @param tokenIndexFrom The index of the token to sell.
   * @param tokenIndexTo The index of the token to buy.
   * @param amount The number of tokens to sell.
   */
  async calculateSwap(
    domainId: string,
    tokenAddress: string,
    tokenIndexFrom: number,
    tokenIndexTo: number,
    amount: BigNumberish,
  ): Promise<BigNumber> {
    const [connextContract, [canonicalDomain, canonicalId]] = await Promise.all([
      this.getConnext(domainId),
      this.getCanonicalTokenId(domainId, tokenAddress),
    ]);
    const key = this.calculateCanonicalKey(canonicalDomain, canonicalId);
    const minAmount = await connextContract.calculateSwap(key, tokenIndexFrom, tokenIndexTo, amount);

    return minAmount;
  }

  /**
   * Returns the minimum LP token amount from deposits or withdrawals.
   * @param domainId The domain id of the pool.
   * @param tokenAddress The address of local or adopted token.
   * @param amounts The amounts of the tokens to deposit/withdraw.
   * @param isDeposit Whether this is a deposit or withdrawal.
   */
  async calculateTokenAmount(
    domainId: string,
    tokenAddress: string,
    amounts: string[],
    isDeposit = true,
  ): Promise<BigNumber> {
    const [connextContract, [canonicalDomain, canonicalId]] = await Promise.all([
      this.getConnext(domainId),
      this.getCanonicalTokenId(domainId, tokenAddress),
    ]);
    const key = this.calculateCanonicalKey(canonicalDomain, canonicalId);
    const amount = await connextContract.calculateSwapTokenAmount(key, amounts, isDeposit);

    return amount;
  }

  /**
   * Returns the minimum LP token amount from deposits or withdrawals.
   * @param domainId The domain id of the pool.
   * @param tokenAddress The address of local or adopted token.
   * @param amount The amount of the LP token to burn on withdrawal.
   */
  async calculateRemoveSwapLiquidity(domainId: string, tokenAddress: string, amount: string): Promise<BigNumber[]> {
    const [connextContract, [canonicalDomain, canonicalId]] = await Promise.all([
      this.getConnext(domainId),
      this.getCanonicalTokenId(domainId, tokenAddress),
    ]);
    const key = this.calculateCanonicalKey(canonicalDomain, canonicalId);
    const amounts = await connextContract.calculateRemoveSwapLiquidity(key, amount);

    return amounts;
  }

  /**
   * Returns the price impact depending on whether liquidity is being deposited or withdrawn.
   * @param tokenInputAmount The amount of inbound tokens (LP tokens for withdrawals, total tokens for deposits, dx for swaps).
   * @param tokenOutputAmount The amount of outbound tokens (total tokens for withdrawals, LP tokens for deposits, dy for swaps).
   * @param virtualPrice The current virtual price of the pool.
   * @param isDeposit Whether this is a deposit or withdrawal.
   */
  calculatePriceImpact(
    tokenInputAmount: BigNumber, // assumed to be 18d precision
    tokenOutputAmount: BigNumber,
    virtualPrice = BigNumber.from(10).pow(18),
    isDeposit = true,
  ): BigNumber {
    // We want to multiply the lpTokenAmount by virtual price
    // Deposits: (VP * output) / input - 1
    // Swaps: (1 * output) / input - 1
    // Withdraws: output / (input * VP) - 1
    if (tokenInputAmount.lte(0)) return constants.Zero;

    return isDeposit
      ? virtualPrice.mul(tokenOutputAmount).div(tokenInputAmount).sub(BigNumber.from(10).pow(18))
      : tokenOutputAmount
          .mul(BigNumber.from(10).pow(36))
          .div(tokenInputAmount.mul(virtualPrice))
          .sub(BigNumber.from(10).pow(18));
  }

  /**
   * Returns the price impact of adding liquidity to a pool.
   * @param domainId The domain id of the pool.
   * @param tokenAddress The address of local or adopted token.
   * @param amountX The amount of asset X.
   * @param amountY The amount of asset Y.
   */
  async calculateAddLiquidityPriceImpact(
    domainId: string,
    tokenAddress: string,
    amountX: string,
    amountY: string,
  ): Promise<BigNumber | undefined> {
    const [virtualPrice, lpTokenAmount] = await Promise.all([
      this.getVirtualPrice(domainId, tokenAddress),
      this.calculateTokenAmount(domainId, tokenAddress, [amountX, amountY]),
    ]);

    let totalAmount = BigNumber.from(amountX).add(BigNumber.from(amountY));

    // Normalize to 18 decimals
    const pool = await this.getPool(domainId, tokenAddress);
    if (pool) {
      const decimals = pool.decimals[0];
      totalAmount = totalAmount.mul(BigNumber.from(10).pow(18 - decimals));
      return this.calculatePriceImpact(totalAmount, lpTokenAmount, virtualPrice);
    }

    return;
  }

  /**
   * Returns the price impact of removing liquidity from a pool.
   * @param domainId The domain id of the pool.
   * @param tokenAddress The address of local or adopted token.
   * @param amountX The amount of asset X.
   * @param amountY The amount of asset Y.
   */
  async calculateRemoveLiquidityPriceImpact(
    domainId: string,
    tokenAddress: string,
    amountX: string,
    amountY: string,
  ): Promise<BigNumber | undefined> {
    const [virtualPrice, lpTokenAmount] = await Promise.all([
      this.getVirtualPrice(domainId, tokenAddress),
      this.calculateTokenAmount(domainId, tokenAddress, [amountX, amountY], false),
    ]);

    let totalAmount = BigNumber.from(amountX).add(BigNumber.from(amountY));

    // Normalize to 18 decimals
    const pool = await this.getPool(domainId, tokenAddress);
    if (pool) {
      const decimals = pool.decimals[0];
      totalAmount = totalAmount.mul(BigNumber.from(10).pow(18 - decimals));
      return this.calculatePriceImpact(lpTokenAmount, totalAmount, virtualPrice, false);
    }

    return;
  }

  /**
   * Returns the price impact of a swap.
   * @param domainId The domain id of the pool.
   * @param amountX The amount of tokens to swap.
   * @param tokenX The address of the token to swap from.
   * @param tokenY The address of the token to swap to.
   */
  async calculateSwapPriceImpact(
    domainId: string,
    amountX: string,
    tokenX: string,
    tokenY: string,
  ): Promise<BigNumber> {
    const [connextContract, [canonicalDomain, canonicalId], tokenIndexFrom, tokenIndexTo] = await Promise.all([
      this.getConnext(domainId),
      this.getCanonicalTokenId(domainId, tokenX),
      this.getPoolTokenIndex(domainId, tokenX, tokenX),
      this.getPoolTokenIndex(domainId, tokenX, tokenY),
    ]);
    const key = this.calculateCanonicalKey(canonicalDomain, canonicalId);
    const amountXNoSlippage = BigNumber.from(1000);

    const amountY = await connextContract.calculateSwap(key, tokenIndexFrom, tokenIndexTo, amountX);
    const amountYNoSlippage = await connextContract.calculateSwap(key, tokenIndexFrom, tokenIndexTo, amountXNoSlippage);

    const rate = BigNumber.from(amountY).mul(BigNumber.from(10).pow(18)).div(amountX);
    const marketRate = BigNumber.from(amountYNoSlippage).mul(BigNumber.from(10).pow(18)).div(amountXNoSlippage);

    return this.calculatePriceImpact(rate, marketRate);
  }

  async calculateAmountReceived(
    originDomain: string,
    destinationDomain: string,
    originTokenAddress: string,
    destinationTokenAddress: string,
    amount: BigNumberish,
    isNextAsset = false,
  ): Promise<{
    amountReceived: BigNumberish;
    originSlippage: BigNumberish;
    routerFee: BigNumberish;
    destinationSlippage: BigNumberish;
  }> {
    const { requestContext, methodContext } = createLoggingContext(this.calculateAmountReceived.name);
    this.logger.info("Method start", requestContext, methodContext, {
      originDomain,
      destinationDomain,
      originTokenAddress,
      destinationTokenAddress,
      amount,
      isNextAsset,
    });

    // Calculate origin swap
    const originPool = await this.getPool(originDomain, originTokenAddress);
    let originAmountReceived = amount;

    // nextAssets don't need to be swapped on origin
    if (!isNextAsset && originPool) {
      originAmountReceived = await this.calculateSwap(
        originDomain,
        originTokenAddress,
        originPool.tokenIndices.get(originTokenAddress)!,
        originPool.tokenIndices.get(originTokenAddress)! == 0 ? 1 : 0,
        amount,
      );
    }

    const originSlippage = BigNumber.from(amount).sub(originAmountReceived).mul(10000).div(amount);
    const feeBps = BigNumber.from(+DEFAULT_ROUTER_FEE * 100);
    const routerFee = BigNumber.from(originAmountReceived).mul(feeBps).div(10000);

    // Calculate destination swap
    const destinationPool = await this.getPool(destinationDomain, destinationTokenAddress);
    const destinationAmount = BigNumber.from(originAmountReceived).sub(routerFee);
    let destinationAmountReceived = destinationAmount;

    if (destinationPool) {
      destinationAmountReceived = await this.calculateSwap(
        destinationDomain,
        destinationTokenAddress,
        destinationPool.tokenIndices.get(destinationTokenAddress)!,
        destinationPool.tokenIndices.get(destinationTokenAddress)! == 0 ? 1 : 0,
        destinationAmount,
      );
    }

    const destinationSlippage = destinationAmount.sub(destinationAmountReceived).mul(10000).div(destinationAmount);

    return {
      amountReceived: destinationAmountReceived,
      originSlippage,
      routerFee,
      destinationSlippage,
    };
  }

  /**
   * Fetches the current price of a token.
   * @param tokenSymbol The symbol for the token.
   */
  async getTokenPrice(tokenSymbol: string) {
    const price = await this.priceFeed.getPriceByTokenSymbol(tokenSymbol);

    return price;
  }

  // ------------------- Read Operations ------------------- //

  async getLPTokenAddress(domainId: string, tokenAddress: string): Promise<string> {
    const [connextContract, [canonicalDomain, canonicalId]] = await Promise.all([
      this.getConnext(domainId),
      this.getCanonicalTokenId(domainId, tokenAddress),
    ]);
    const key = this.calculateCanonicalKey(canonicalDomain, canonicalId);
    const lpTokenAddress = await connextContract.getSwapLPToken(key);

    return lpTokenAddress;
  }

  async getLPTokenSupply(domainId: string, lpTokenAddress: string): Promise<BigNumber> {
    const erc20Contract = await this.getERC20(domainId, lpTokenAddress);
    const amount = erc20Contract.totalSupply();

    return amount;
  }

  async getTokenUserBalance(domainId: string, tokenAddress: string, userAddress: string): Promise<BigNumber> {
    const erc20Contract = await this.getERC20(domainId, tokenAddress);
    const balance = erc20Contract.balanceOf(userAddress);

    return balance;
  }

  async getPoolTokenIndex(domainId: string, tokenAddress: string, poolTokenAddress: string): Promise<number> {
    const [connextContract, [canonicalDomain, canonicalId]] = await Promise.all([
      this.getConnext(domainId),
      this.getCanonicalTokenId(domainId, tokenAddress),
    ]);
    const key = this.calculateCanonicalKey(canonicalDomain, canonicalId);
    const index = await connextContract.getSwapTokenIndex(key, poolTokenAddress);

    return index;
  }

  async getPoolTokenBalance(domainId: string, tokenAddress: string, poolTokenAddress: string): Promise<BigNumber> {
    const [connextContract, index, [canonicalDomain, canonicalId]] = await Promise.all([
      this.getConnext(domainId),
      this.getPoolTokenIndex(domainId, tokenAddress, poolTokenAddress),
      this.getCanonicalTokenId(domainId, tokenAddress),
    ]);
    const key = this.calculateCanonicalKey(canonicalDomain, canonicalId);
    const balance = await connextContract.getSwapTokenBalance(key, index);

    return balance;
  }

  async getPoolTokenAddress(domainId: string, tokenAddress: string, index: number) {
    const [connextContract, [canonicalDomain, canonicalId]] = await Promise.all([
      this.getConnext(domainId),
      this.getCanonicalTokenId(domainId, tokenAddress),
    ]);
    const key = this.calculateCanonicalKey(canonicalDomain, canonicalId);
    const poolTokenAddress = await connextContract.getSwapToken(key, index);

    return poolTokenAddress;
  }

  async getVirtualPrice(domainId: string, tokenAddress: string): Promise<BigNumber> {
    const [connextContract, [canonicalDomain, canonicalId]] = await Promise.all([
      this.getConnext(domainId),
      this.getCanonicalTokenId(domainId, tokenAddress),
    ]);
    const key = this.calculateCanonicalKey(canonicalDomain, canonicalId);
    const price = await connextContract.getSwapVirtualPrice(key);

    return price;
  }

  async getRepresentation(domainId: string, tokenAddress: string): Promise<string> {
    const [connextContract, [canonicalDomain, canonicalId]] = await Promise.all([
      this.getConnext(domainId),
      this.getCanonicalTokenId(domainId, tokenAddress),
    ]);
    const key = this.calculateCanonicalKey(canonicalDomain, canonicalId);
    const representation = await connextContract["canonicalToRepresentation(bytes32)"](key);

    return representation;
  }

  async getAdopted(domainId: string, tokenAddress: string): Promise<string> {
    const [connextContract, [canonicalDomain, canonicalId]] = await Promise.all([
      this.getConnext(domainId),
      this.getCanonicalTokenId(domainId, tokenAddress),
    ]);
    const key = this.calculateCanonicalKey(canonicalDomain, canonicalId);
    const adopted = await connextContract["canonicalToAdopted(bytes32)"](key);

    return adopted;
  }

  // ------------------- Pool Operations ------------------- //

  /**
   * Returns the transaction request for adding liquidity to a pool.
   * @param domainId The domain id of the pool.
   * @param tokenAddress The address of local or adopted token.
   * @param amounts The amounts of the tokens to swap.
   * @param minToMint The minimum acceptable amount of LP tokens to mint.
   * @param deadline The deadline for the swap.
   */
  async addLiquidity(
    domainId: string,
    tokenAddress: string,
    amounts: string[],
    minToMint = "0",
    deadline = this.getDefaultDeadline(),
  ): Promise<providers.TransactionRequest> {
    const { requestContext, methodContext } = createLoggingContext(this.addLiquidity.name);
    this.logger.info("Method start", requestContext, methodContext, { domainId, amounts, deadline });

    const signerAddress = this.config.signerAddress;
    if (!signerAddress) {
      throw new SignerAddressMissing();
    }

    const [connextContract, [canonicalDomain, canonicalId]] = await Promise.all([
      this.getConnext(domainId),
      this.getCanonicalTokenId(domainId, tokenAddress),
    ]);
    const key = this.calculateCanonicalKey(canonicalDomain, canonicalId);
    const txRequest = await connextContract.populateTransaction.addSwapLiquidity(key, amounts, minToMint, deadline);

    this.logger.info(`${this.addLiquidity.name} transaction created `, requestContext, methodContext);

    return txRequest;
  }

  /**
   * Returns the transaction request for removing liquidity from a pool.
   * @param domainId The domain id of the pool.
   * @param tokenAddress The address of local or adopted token.
   * @param amount The amount of the token to swap.
   * @param minAmounts The minimum acceptable amounts of each token to burn.
   * @param deadline The deadline for the swap.
   */
  async removeLiquidity(
    domainId: string,
    tokenAddress: string,
    amount: string,
    minAmounts = ["0", "0"],
    deadline = this.getDefaultDeadline(),
  ): Promise<providers.TransactionRequest> {
    const { requestContext, methodContext } = createLoggingContext(this.removeLiquidity.name);
    this.logger.info("Method start", requestContext, methodContext, { domainId, amount, deadline });

    const signerAddress = this.config.signerAddress;
    if (!signerAddress) {
      throw new SignerAddressMissing();
    }

    const [connextContract, [canonicalDomain, canonicalId]] = await Promise.all([
      this.getConnext(domainId),
      this.getCanonicalTokenId(domainId, tokenAddress),
    ]);
    const key = this.calculateCanonicalKey(canonicalDomain, canonicalId);
    const txRequest = await connextContract.populateTransaction.removeSwapLiquidity(key, amount, minAmounts, deadline);

    this.logger.info(`${this.addLiquidity.name} transaction created `, requestContext, methodContext);

    return txRequest;
  }

  /**
   * Returns the transaction request for performing a swap in a pool.
   * @param domainId The domain id of the pool.
   * @param tokenAddress The address of local or adopted token.
   * @param from The address of the token to sell.
   * @param to The address of the token to buy.
   * @param amount The amount of the selling token to swap.
   * @param minDy The minimum amount of the buying token to receive.
   * @param deadline The deadline for the swap.
   */
  async swap(
    domainId: string,
    tokenAddress: string,
    from: string,
    to: string,
    amount: string,
    minDy = 0,
    deadline = this.getDefaultDeadline(),
  ): Promise<providers.TransactionRequest> {
    const { requestContext, methodContext } = createLoggingContext(this.swap.name);
    this.logger.info("Method start", requestContext, methodContext, {
      domainId,
      tokenAddress,
      from,
      to,
      amount,
      deadline,
    });

    const signerAddress = this.config.signerAddress;
    if (!signerAddress) {
      throw new SignerAddressMissing();
    }

    const [connextContract, [canonicalDomain, canonicalId], tokenIndexFrom, tokenIndexTo] = await Promise.all([
      this.getConnext(domainId),
      this.getCanonicalTokenId(domainId, tokenAddress),
      this.getPoolTokenIndex(domainId, tokenAddress, from),
      this.getPoolTokenIndex(domainId, tokenAddress, to),
    ]);
    const key = this.calculateCanonicalKey(canonicalDomain, canonicalId);

    const txRequest = await connextContract.populateTransaction.swap(
      key,
      tokenIndexFrom,
      tokenIndexTo,
      amount,
      minDy,
      deadline,
    );

    this.logger.info(`${this.swap.name} transaction created `, requestContext, methodContext);

    return txRequest;
  }

  // ------------------- Pool Data ------------------- //

  /**
   * Returns the StableSwap Pool for a given asset.
   * @param domainId The domain id of the pool.
   * @param tokenAddress The address of local or adopted token.
   */
  getPool = memoize(
    async (domainId: string, tokenAddress: string): Promise<Pool | undefined> => {
      const { requestContext, methodContext } = createLoggingContext(this.getPool.name);
      this.logger.info("Method start", requestContext, methodContext, {
        domainId,
        tokenAddress,
      });

      const [canonicalDomain, canonicalId] = await this.getCanonicalTokenId(domainId, tokenAddress);

      if (canonicalDomain == domainId) {
        this.logger.debug(`No Pool; token ${tokenAddress} is canonical on domain ${domainId}`);
        return;
      }

      const key: string = this.calculateCanonicalKey(canonicalDomain, canonicalId);

      const [local, adopted, lpTokenAddress] = await Promise.all([
        this.getRepresentation(domainId, tokenAddress),
        this.getAdopted(domainId, tokenAddress),
        this.getLPTokenAddress(domainId, tokenAddress),
      ]);

      if (local == adopted) {
        this.logger.debug(`No Pool for token ${tokenAddress} on domain ${domainId}`);
        return;
      }

      const [localErc20Contract, adoptedErc20Contract] = await Promise.all([
        this.getERC20(domainId, local),
        this.getERC20(domainId, adopted),
      ]);

      const [adoptedDecimals, adoptedBalance, tokenSymbol, localDecimals, localBalance, localIdx] = await Promise.all([
        adoptedErc20Contract.decimals(),
        this.getPoolTokenBalance(domainId, adopted, adopted),
        adoptedErc20Contract.symbol(),
        localErc20Contract.decimals(),
        this.getPoolTokenBalance(domainId, local, local),
        this.getPoolTokenIndex(domainId, tokenAddress, local),
      ]);

      // Use index order that appears on-chain
      const [asset0, asset0Decimals, asset0Balance, asset1, asset1Decimals, asset1Balance] =
        localIdx == 0
          ? [local, localDecimals, localBalance, adopted, adoptedDecimals, adoptedBalance]
          : [adopted, adoptedDecimals, adoptedBalance, local, localDecimals, localBalance];

      const indices = new Map<string, number>();
      indices.set(asset0, 0);
      indices.set(asset1, 1);

      const pool = new Pool(
        domainId,
        `${tokenSymbol}-Pool`,
        `${tokenSymbol}-next${tokenSymbol}`,
        [asset0, asset1],
        indices,
        [asset0Decimals, asset1Decimals],
        [asset0Balance, asset1Balance],
        lpTokenAddress,
        key,
      );

      return pool;
    },
    { promise: true, maxAge: 5 * 60 * 1000 }, // 5 min
  );

  /**
   * Returns the Pools that a user has LP tokens for.
   * @param domainId The domain id of the pool.
   * @param userAddress The address of the user to get the pools for.
   */
  async getUserPools(
    domainId: string,
    userAddress: string,
  ): Promise<{ info: Pool; lpTokenBalance: BigNumber; poolTokenBalances: BigNumber[] }[]> {
    const { requestContext, methodContext } = createLoggingContext(this.swap.name);
    this.logger.info("Method start", requestContext, methodContext, { domainId, userAddress });

    const result: { info: Pool; lpTokenBalance: BigNumber; poolTokenBalances: BigNumber[] }[] = [];

    await Promise.all(
      Object.values(this.config.chains[domainId].assets).map(async (asset: AssetDescription) => {
        const pool = await this.getPool(domainId, asset.address);
        if (pool) {
          const lpTokenUserBalance = await this.getTokenUserBalance(domainId, pool.lpTokenAddress, userAddress);
          const adoptedTokenUserBalance = await this.getTokenUserBalance(domainId, pool.tokens[0], userAddress);
          const localTokenUserBalance = await this.getTokenUserBalance(domainId, pool.tokens[1], userAddress);
          result.push({
            info: pool,
            lpTokenBalance: lpTokenUserBalance,
            poolTokenBalances: [adoptedTokenUserBalance, localTokenUserBalance],
          });
        } else {
          this.logger.info("No pool for asset", requestContext, methodContext, { asset });
        }
      }),
    );

    return result;
  }

  async getPoolStats(domainId: string, tokenAddress: string): Promise<IPoolStats | undefined> {
    const pool = await this.getPool(domainId, tokenAddress);
    if (pool) {
      const stats: IPoolStats = {
        liquidity: await pool.getLiquidity(),
        volume: await pool.getVolume(),
        fees: await pool.getFees(),
        apy: await pool.getApy(),
      };

      return stats;
    }

    return;
  }

  async getYieldStatsForDay(
    domainId: string,
    tokenAddress: string,
    unixTimestamp: number,
  ): Promise<
    | {
        totalFeesFormatted: number;
        totalLiquidityFormatted: number;
        totalVolume: BigNumber;
        totalVolumeFormatted: number;
      }
    | undefined
  > {
    const [connextContract, [canonicalDomain, canonicalId]] = await Promise.all([
      this.getConnext(domainId),
      this.getCanonicalTokenId(domainId, tokenAddress),
    ]);
    const key: string = this.calculateCanonicalKey(canonicalDomain, canonicalId);
    const pool = await this.getPool(domainId, tokenAddress);

    if (pool) {
      const endTimestamp = unixTimestamp;
      const endBlock = await this.getBlockNumberFromUnixTimestamp(domainId, endTimestamp);

      const startTimestamp = endTimestamp - 86_400; // 24 hours prior
      let startBlock = await this.getBlockNumberFromUnixTimestamp(domainId, startTimestamp);

      const perBatch = 2000;
      let endBatchBlock = Math.min(startBlock + perBatch, endBlock);

      const tokenSwapEvents: any[] = [];
      while (startBlock < endBlock) {
        tokenSwapEvents.push(
          ...(await connextContract.queryFilter(connextContract.filters.TokenSwap(), startBlock, endBatchBlock)),
        );

        startBlock = endBatchBlock;
        endBatchBlock = Math.min(endBatchBlock + perBatch, endBlock);
      }

      const swapStorage = await connextContract.getSwapStorage(key);
      const basisPoints = swapStorage.swapFee;
      const FEE_DENOMINATOR = "10000000000"; // 10**10
      const decimals = pool.decimals[0];

      let totalVolume = BigNumber.from(0);
      let totalFees = BigNumber.from(0);
      for (const event of tokenSwapEvents) {
        const tokensSold: BigNumber = event.args.tokensSold;
        totalFees = totalFees.add(tokensSold.mul(BigNumber.from(basisPoints)).div(BigNumber.from(FEE_DENOMINATOR)));
        totalVolume = totalVolume.add(tokensSold);
      }

      const reserve0 = pool.balances[0];
      const reserve1 = pool.balances[1];
      const totalLiquidity = reserve0.add(reserve1);
      const totalLiquidityFormatted = Number(utils.formatUnits(totalLiquidity, decimals));
      const totalFeesFormatted = Number(utils.formatUnits(totalFees, decimals));
      const totalVolumeFormatted = Number(utils.formatUnits(totalVolume, decimals));

      return {
        totalFeesFormatted,
        totalLiquidityFormatted,
        totalVolume,
        totalVolumeFormatted,
      };
    }

    return;
  }

  calculateYield(
    feesEarned: number,
    principal: number,
    days: number,
  ): {
    apr: number;
    apy: number;
  } {
    const rate = feesEarned / principal;
    const period = 365 / days;
    const apr = rate * period;
    const apy = (1 + rate) ** period - 1;
    return { apr, apy };
  }

  getYieldData = memoize(
    async (
      domainId: string,
      tokenAddress: string,
      days: number = 1,
    ): Promise<
      | {
          apr: number;
          apy: number;
          volume: BigNumber;
          volumeFormatted: number;
        }
      | undefined
    > => {
      const provider = this.getProvider(domainId);
      const block = await provider.getBlock("latest");
      const endTimestamp = block.timestamp;

      const yieldStats = await this.getYieldStatsForDay(domainId, tokenAddress, endTimestamp);

      if (yieldStats) {
        const {
          totalFeesFormatted: feesEarnedToday,
          totalLiquidityFormatted: totalLiquidityToday,
          totalVolume,
          totalVolumeFormatted,
        } = yieldStats;

        const { apr, apy } = this.calculateYield(feesEarnedToday, totalLiquidityToday, days);

        return {
          apr: Math.max(apr, 0),
          apy: Math.max(apy, 0),
          volume: totalVolume,
          volumeFormatted: totalVolumeFormatted,
        };
      }

      return;
    },
    { promise: true, maxAge: 5 * 60 * 1000 }, // 5 min
  );

  getLiquidityMiningAprPerPool = memoize(
    async (totalTokens: number, totalBlocks: number, numPools: number, tokenSymbol: string, poolTVL: number) => {
      // Numbers for Optimism:
      //  totalTokens = 250_000
      //  totalBlocks = 657_436 // 3 months
      //  numPools = 2
      const blocksPerDay = 7160;
      const period = 365 / (totalBlocks / blocksPerDay);
      const tokenPrice = await this.getTokenPrice(tokenSymbol);
      const tokenValuePerPool = (totalTokens / numPools) * tokenPrice;
      const rate = tokenValuePerPool / poolTVL;
      const apr = rate * period;

      return apr;
    },
    { promise: true },
  );
}
