import { expect, mkAddress, mkBytes32, OriginMessage, RootMessage, ReceivedAggregateRoot } from "@connext/nxtp-utils";
import {
  destinationTransfer,
  originMessage,
  rootMessage,
  originTransfer,
  receivedAggregateRoot,
  xquery,
} from "../../../src/lib/helpers/parse";
import { stubContext, mockOriginTransferEntity, mockDestinationTransferEntity } from "../../mock";
import { mock } from "@connext/nxtp-utils";
import { restore, reset } from "sinon";
import { constants, utils } from "ethers";

describe("Helpers:parse", () => {
  describe("#originTransfer", () => {
    it("should throw if the entity is undefined", () => {
      const entity = undefined;
      expect(() => {
        originTransfer(entity, { [constants.AddressZero]: { symbol: "ETH", decimals: 18 } });
      }).to.throw("Subgraph `OriginTransfer` entity parser: Transfer entity is `undefined`.");
    });

    it("should throw if wrong transfer type", () => {
      const entity1 = {
        executedTransactionHash: mkBytes32(),
      };
      const entity2 = {
        reconciledTransactionHash: mkBytes32(),
      };
      expect(() => {
        originTransfer(entity1, { [constants.AddressZero]: { symbol: "ETH", decimals: 18 } });
      }).to.throw("Subgraph `OriginTransfer` entity parser: Transfer entity is a destination transfer entity.");
      expect(() => {
        originTransfer(entity2, { [constants.AddressZero]: { symbol: "ETH", decimals: 18 } });
      }).to.throw("Subgraph `OriginTransfer` entity parser: Transfer entity is a destination transfer entity.");
    });

    it("should throw if a required field is missing", () => {
      const entity = {
        transferId: mkBytes32(),
        originDomain: "1111",
        destinationDomain: "3331",
        nonce: 0,
        to: mkAddress(),
      };

      expect(() => {
        originTransfer(entity, { [constants.AddressZero]: { symbol: "ETH", decimals: 18 } });
      }).to.throw("Subgraph `OriginTransfer` entity parser: Transfer entity missing required field");
    });

    it("happy-1: should parse the originTransfer entity", () => {
      expect(
        originTransfer(mockOriginTransferEntity, { [mockOriginTransferEntity.asset]: { symbol: "ETH", decimals: 18 } }),
      ).to.be.deep.eq({
        transferId: "0xaaa0000000000000000000000000000000000000000000000000000000000000",
        xparams: {
          originDomain: "1111",
          destinationDomain: "3331",
          canonicalDomain: undefined,
          to: "0x1000000000000000000000000000000000000000",
          delegate: undefined,
          receiveLocal: false,
          callData: "0x",
          slippage: undefined,
          originSender: undefined,
          bridgedAmt: undefined,
          normalizedIn: "100",
          nonce: 0,
          canonicalId: undefined,
        },
        origin: {
          chain: 4,
          messageHash: undefined,
          assets: {
            transacting: {
              asset: constants.AddressZero,
              amount: mockOriginTransferEntity.normalizedIn,
            },
            bridged: { asset: constants.AddressZero, amount: undefined },
          },
          xcall: {
            caller: "0x2000000000000000000000000000000000000000",
            transactionHash: "0xbbb0000000000000000000000000000000000000000000000000000000000000",
            timestamp: 11111111,
            gasPrice: "10000000000",
            gasLimit: "1000000",
            blockNumber: 5000,
          },
        },
        destination: undefined,
      });
    });

    it("happy-2: should parse the originTransfer entity", () => {
      expect(
        originTransfer(
          { ...mockOriginTransferEntity, timestamp: undefined, blockNumber: undefined },
          { [constants.AddressZero]: { symbol: "ETH", decimals: 18 } },
        ),
      ).to.be.deep.eq({
        transferId: "0xaaa0000000000000000000000000000000000000000000000000000000000000",
        xparams: {
          originDomain: "1111",
          destinationDomain: "3331",
          canonicalDomain: undefined,
          to: "0x1000000000000000000000000000000000000000",
          delegate: undefined,
          receiveLocal: false,
          callData: "0x",
          slippage: undefined,
          originSender: undefined,
          bridgedAmt: undefined,
          normalizedIn: "100",
          nonce: 0,
          canonicalId: undefined,
        },
        origin: {
          chain: 4,
          messageHash: undefined,
          assets: {
            transacting: {
              asset: constants.AddressZero,
              amount: mockOriginTransferEntity.normalizedIn,
            },
            bridged: { asset: constants.AddressZero, amount: undefined },
          },
          xcall: {
            caller: "0x2000000000000000000000000000000000000000",
            transactionHash: "0xbbb0000000000000000000000000000000000000000000000000000000000000",
            timestamp: 0,
            gasPrice: "10000000000",
            gasLimit: "1000000",
            blockNumber: 0,
          },
        },
        destination: undefined,
      });
    });

    it("happy-3: should parse the originTransfer entity with non-standard decimals", () => {
      expect(
        originTransfer(
          {
            ...mockOriginTransferEntity,
            timestamp: undefined,
            blockNumber: undefined,
            normalizedIn: "72850291000000000000",
            asset: {
              adoptedAsset: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            },
          },
          { ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]: { symbol: "USDC", decimals: 6 } },
        ),
      ).to.be.deep.eq({
        transferId: "0xaaa0000000000000000000000000000000000000000000000000000000000000",
        xparams: {
          originDomain: "1111",
          destinationDomain: "3331",
          canonicalDomain: undefined,
          to: "0x1000000000000000000000000000000000000000",
          delegate: undefined,
          receiveLocal: false,
          callData: "0x",
          slippage: undefined,
          originSender: undefined,
          bridgedAmt: undefined,
          normalizedIn: "72850291000000000000",
          nonce: 0,
          canonicalId: undefined,
        },
        origin: {
          chain: 4,
          messageHash: undefined,
          assets: {
            transacting: {
              asset: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
              amount: "72850291",
            },
            bridged: { asset: constants.AddressZero, amount: undefined },
          },
          xcall: {
            caller: "0x2000000000000000000000000000000000000000",
            transactionHash: "0xbbb0000000000000000000000000000000000000000000000000000000000000",
            timestamp: 0,
            gasPrice: "10000000000",
            gasLimit: "1000000",
            blockNumber: 0,
          },
        },
        destination: undefined,
      });
    });
  });
  describe("#destinationTransfer", () => {
    it("should throw if the entity is undefined", () => {
      const entity = undefined;
      expect(() => {
        destinationTransfer(entity);
      }).to.throw("Subgraph `DestinationTransfer` entity parser: Transfer entity is `undefined`.");
    });

    it("should throw if wrong transfer type", () => {
      const entity1 = {
        transactionHash: mkBytes32(),
      };
      expect(() => {
        destinationTransfer(entity1);
      }).to.throw("Subgraph `DestinationTransfer` entity parser: Transfer entity is an origin transfer entity.");
    });

    it("should throw if a required field is missing", () => {
      const entity = {
        transferId: mkBytes32(),
        originDomain: "1111",
        localAmount: "100",
        localAsset: mkAddress(),
        router: [mkAddress("0x111"), mkAddress("0x112")],
      };

      expect(() => {
        destinationTransfer(entity);
      }).to.throw("Subgraph `DestinationTransfer` entity parser: Transfer entity missing required field");
    });

    it("happy-1: should parse the destination transfer entity", () => {
      expect(destinationTransfer(mockDestinationTransferEntity)).to.be.deep.eq({
        transferId: "0xaaa0000000000000000000000000000000000000000000000000000000000000",
        xparams: {
          originDomain: "1111",
          destinationDomain: "3331",
          canonicalDomain: undefined,
          to: "0x1000000000000000000000000000000000000000",
          delegate: undefined,
          receiveLocal: false,
          callData: "0x",
          slippage: undefined,
          originSender: "0x1300000000000000000000000000000000000000",
          bridgedAmt: undefined,
          amount: "100",
          normalizedIn: undefined,
          nonce: 0,
          canonicalId: undefined,
        },
        origin: undefined,
        destination: {
          chain: 42,
          status: "Executed",
          routers: ["0x1110000000000000000000000000000000000000", "0x1120000000000000000000000000000000000000"],
          assets: {
            transacting: {
              amount: "100",
              asset: "0x0000000000000000000000000000000000000000",
            },
            local: { asset: constants.AddressZero, amount: undefined },
          },
          execute: {
            originSender: "0x1300000000000000000000000000000000000000",
            caller: "0x1400000000000000000000000000000000000000",
            transactionHash: "0xaaa0000000000000000000000000000000000000000000000000000000000000",
            timestamp: 1000000,
            gasPrice: "10000000000",
            gasLimit: "1000000",
            blockNumber: 5000,
          },
          reconcile: {
            caller: "0x1500000000000000000000000000000000000000",
            transactionHash: "0xbbb0000000000000000000000000000000000000000000000000000000000000",
            timestamp: 1000000,
            gasPrice: "10000000000",
            gasLimit: "1000000",
            blockNumber: 5000,
          },
        },
      });
    });
    it("happy-2: should parse the destination transfer entity", () => {
      expect(
        destinationTransfer({
          ...mockDestinationTransferEntity,

          to: undefined,
          amount: undefined,
          executedTimestamp: undefined,
          executedBlockNumber: undefined,
          reconciledTimestamp: undefined,
          reconciledBlockNumber: undefined,
        }),
      ).to.be.deep.eq({
        transferId: "0xaaa0000000000000000000000000000000000000000000000000000000000000",
        xparams: {
          originDomain: "1111",
          destinationDomain: "3331",
          canonicalDomain: undefined,
          to: undefined,
          delegate: undefined,
          receiveLocal: false,
          callData: "0x",
          slippage: undefined,
          originSender: "0x1300000000000000000000000000000000000000",
          bridgedAmt: undefined,
          normalizedIn: undefined,
          amount: undefined,
          nonce: 0,
          canonicalId: undefined,
        },
        origin: undefined,
        destination: {
          chain: 42,
          status: "Executed",
          routers: ["0x1110000000000000000000000000000000000000", "0x1120000000000000000000000000000000000000"],
          assets: {
            transacting: undefined,
            local: { asset: constants.AddressZero, amount: undefined },
          },
          execute: {
            originSender: "0x1300000000000000000000000000000000000000",
            caller: "0x1400000000000000000000000000000000000000",
            transactionHash: "0xaaa0000000000000000000000000000000000000000000000000000000000000",
            timestamp: 0,
            gasPrice: "10000000000",
            gasLimit: "1000000",
            blockNumber: 0,
          },
          reconcile: {
            caller: "0x1500000000000000000000000000000000000000",
            transactionHash: "0xbbb0000000000000000000000000000000000000000000000000000000000000",
            timestamp: 0,
            gasPrice: "10000000000",
            gasLimit: "1000000",
            blockNumber: 0,
          },
        },
      });
    });
  });
  describe("#xquery", () => {
    before(() => {
      stubContext();
    });
    after(() => {
      restore();
      reset();
    });
    it("throw the error if response data doesn't exist", () => {
      const response = { msg: "success" };
      expect(() => {
        xquery(response);
      }).to.throw("Parsing xquery result failed!");
    });
    it("happy: should parse the crosschain query result", () => {
      const response = {
        data: {
          rinkeby_assets: [
            {
              id: mkBytes32("0x111"),
              local: mkAddress("0x11"),
              adoptedAsset: mkAddress("0x12"),
            },
          ],
          rinkeby_assetBalances: [
            {
              id: `${mkAddress("0x12")}-${mkAddress("0x13")}`,
              amount: "1000000000000000",
            },
          ],
          goerli_assets: [
            {
              id: mkBytes32("0x112"),
              local: mkAddress("0x21"),
              adoptedAsset: mkAddress("0x22"),
            },
          ],
          goerli_assetBalances: [
            {
              id: `${mkAddress("0x22")}-${mkAddress("0x23")}`,
              amount: "1000000000000000",
            },
          ],
        },
      };

      const xqeuryRes = xquery(response);
      expect(xqeuryRes.get("1111")).to.be.deep.eq([
        [
          {
            id: "0x1110000000000000000000000000000000000000000000000000000000000000",
            local: "0x1100000000000000000000000000000000000000",
            adoptedAsset: "0x1200000000000000000000000000000000000000",
          },
        ],
        [
          {
            id: "0x1200000000000000000000000000000000000000-0x1300000000000000000000000000000000000000",
            amount: "1000000000000000",
          },
        ],
      ]);

      expect(xqeuryRes.get("3331")).to.be.deep.eq([
        [
          {
            id: "0x1120000000000000000000000000000000000000000000000000000000000000",
            local: "0x2100000000000000000000000000000000000000",
            adoptedAsset: "0x2200000000000000000000000000000000000000",
          },
        ],
        [
          {
            id: "0x2200000000000000000000000000000000000000-0x2300000000000000000000000000000000000000",
            amount: "1000000000000000",
          },
        ],
      ]);
    });
  });
  describe("#originMessage", () => {
    it("should throw if the entity is undefined", () => {
      const entity = undefined;
      expect(() => {
        originMessage(entity);
      }).to.throw("Subgraph `OriginMessage` entity parser: OriginMessage entity is `undefined`.");
    });

    it("should throw if a required field is missing", () => {
      const entity: OriginMessage = {} as any;

      expect(() => {
        originMessage(entity);
      }).to.throw("Subgraph `OriginMessage` entity parser: Message entity missing required field");
    });

    it("should parse valid origin message", () => {
      const entity: OriginMessage = mock.entity.originMessage();
      expect(originMessage(entity)).to.be.deep.eq(entity);
    });
  });

  describe("#rootMessage", () => {
    it("should throw if the entity is undefined", () => {
      const entity = undefined;
      expect(() => {
        rootMessage(entity);
      }).to.throw("Subgraph `RootMessage` entity parser: RootMessage, entity is `undefined`.");
    });

    it("should throw if a required field is missing", () => {
      const entity: RootMessage = {} as any;

      expect(() => {
        rootMessage(entity);
      }).to.throw("Subgraph `RootMessage` entity parser: Message entity missing required field");
    });

    it("should parse valid root message", () => {
      const entity: RootMessage = mock.entity.rootMessage();
      expect(rootMessage(entity)).to.be.deep.eq(entity);
    });
  });
  describe("#receivedAggregateRoot", () => {
    it("should throw if the entity is undefined", () => {
      const entity = undefined;
      expect(() => {
        receivedAggregateRoot(entity);
      }).to.throw("Subgraph `ReceivedAggregateRoot` entity parser: ReceivedAggregateRoot, entity is `undefined`.");
    });

    it("should throw if wrong message type", () => {
      const entity: RootMessage = mock.entity.rootMessage();
      expect(() => {
        receivedAggregateRoot(entity);
      }).to.throw("Subgraph `ReceivedAggregateRoot` entity parser: Message entity missing required field");
    });

    it("should throw if a required field is missing", () => {
      const entity: ReceivedAggregateRoot = {} as any;

      expect(() => {
        receivedAggregateRoot(entity);
      }).to.throw("Subgraph `ReceivedAggregateRoot` entity parser: Message entity missing required field");
    });

    it("should parse valid received aggregate root", () => {
      const entity: ReceivedAggregateRoot = mock.entity.receivedAggregateRoot();
      expect(receivedAggregateRoot(entity)).to.be.deep.eq(entity);
    });
  });
});
