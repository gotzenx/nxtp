import { utils, BigNumber } from "ethers";
import { createStubInstance, SinonStubbedInstance } from "sinon";
import { ConnextContractDeployments, ConnextContractInterfaces } from "@connext/nxtp-txservice";
import { mkAddress, mock as _mock } from "@connext/nxtp-utils";
import { ConnextAbi } from "@connext/nxtp-contracts";

import { NxtpSdkConfig } from "../src/config";

// Used for stubbing functions at the bottom of this file:

export const mock = {
  ..._mock,
  config: (): NxtpSdkConfig => ({
    signerAddress: mkAddress("0xabcdef123"),
    logLevel: (process.env.LOG_LEVEL as any) || "silent",
    network: "testnet",
    slippage: 10000,
    environment: "staging",
    chains: {
      [mock.domain.A]: {
        assets: [mock.asset.A],
        confirmations: 1,
        providers: ["http://example.com"],
        deployments: {
          connext: mkAddress("0xabcdef123"),
          stableSwap: mkAddress("0xabcdef123"),
          multisend: mkAddress("0xabcdef123"),
        },
        gasStations: [],
      },
      [mock.domain.B]: {
        assets: [mock.asset.A],
        confirmations: 1,
        providers: ["http://example.com"],
        deployments: {
          connext: mkAddress("0xabcdef123"),
          stableSwap: mkAddress("0xabcdef123"),
          multisend: mkAddress("0xabcdef123"),
        },
        gasStations: [],
      },
    },
  }),
  contracts: {
    interfaces: (): SinonStubbedInstance<ConnextContractInterfaces> => {
      const encodedDataMock = "0xabcde";

      const connext = createStubInstance(utils.Interface);
      connext.encodeFunctionData.returns(encodedDataMock);
      connext.decodeFunctionResult.returns([BigNumber.from(1000)]);

      const priceOracle = createStubInstance(utils.Interface);
      priceOracle.encodeFunctionData.returns(encodedDataMock);
      priceOracle.decodeFunctionResult.returns([BigNumber.from(1000)]);

      const stableSwap = createStubInstance(utils.Interface);
      stableSwap.encodeFunctionData.returns(encodedDataMock);
      stableSwap.decodeFunctionResult.returns([BigNumber.from(1000)]);

      const stableSwapFacet = createStubInstance(utils.Interface);
      stableSwapFacet.encodeFunctionData.returns(encodedDataMock);
      stableSwapFacet.decodeFunctionResult.returns([BigNumber.from(1000)]);

      const erc20 = createStubInstance(utils.Interface);
      erc20.encodeFunctionData.returns(encodedDataMock);
      erc20.decodeFunctionResult.returns([BigNumber.from(1000)]);

      const erc20Extended = createStubInstance(utils.Interface);
      erc20.encodeFunctionData.returns(encodedDataMock);
      erc20.decodeFunctionResult.returns([BigNumber.from(1000)]);

      const spokeConnector = createStubInstance(utils.Interface);
      spokeConnector.encodeFunctionData.returns(encodedDataMock);
      spokeConnector.decodeFunctionResult.returns([BigNumber.from(1000)]);

      const relayerProxy = createStubInstance(utils.Interface);
      relayerProxy.encodeFunctionData.returns(encodedDataMock);
      relayerProxy.decodeFunctionResult.returns([BigNumber.from(1000)]);

      const relayerProxyHub = createStubInstance(utils.Interface);
      relayerProxyHub.encodeFunctionData.returns(encodedDataMock);
      relayerProxyHub.decodeFunctionResult.returns([BigNumber.from(1000)]);

      const rootManager = createStubInstance(utils.Interface);
      rootManager.encodeFunctionData.returns(encodedDataMock);
      rootManager.decodeFunctionResult.returns([BigNumber.from(1000)]);

      return {
        erc20: erc20 as unknown as ConnextContractInterfaces["erc20"],
        // erc20Extended: erc20Extended as unknown as ConnextContractInterfaces["erc20Extended"],
        connext: connext as unknown as ConnextContractInterfaces["connext"],
        priceOracle: priceOracle as unknown as ConnextContractInterfaces["priceOracle"],
        stableSwap: stableSwap as unknown as ConnextContractInterfaces["stableSwap"],
        spokeConnector: spokeConnector as unknown as ConnextContractInterfaces["spokeConnector"],
        relayerProxy: relayerProxy as unknown as ConnextContractInterfaces["relayerProxy"],
        relayerProxyHub: relayerProxyHub as unknown as ConnextContractInterfaces["relayerProxyHub"],
        rootManager: rootManager as unknown as ConnextContractInterfaces["rootManager"],
      };
    },
    deployments: (): ConnextContractDeployments => {
      return {
        connext: (_: number) => ({
          address: mkAddress("0xbadcab"),
          abi: ConnextAbi,
        }),
        priceOracle: (_: number) => ({ address: mkAddress("0xbaddad"), abi: {} }),
        stableSwap: (_: number) => ({ address: mkAddress("0xbbbdcc"), abi: {} }),
        hubConnector: (_: number) => ({ address: mkAddress("0xbbbdcc"), abi: {} }),
        spokeConnector: (_: number) => ({ address: mkAddress("0xbbbdcc"), abi: {} }),
        relayerProxy: (_: number) => ({ address: mkAddress("0xbbbdcc"), abi: {} }),
        multisend: (_: number) => ({ address: mkAddress("0xbbbdcc"), abi: {} }),
      };
    },
  },
};
