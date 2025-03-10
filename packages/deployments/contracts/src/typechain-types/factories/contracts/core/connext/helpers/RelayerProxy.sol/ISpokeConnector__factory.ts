/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISpokeConnector,
  ISpokeConnectorInterface,
} from "../../../../../../contracts/core/connext/helpers/RelayerProxy.sol/ISpokeConnector";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "message",
            type: "bytes",
          },
          {
            internalType: "bytes32[32]",
            name: "path",
            type: "bytes32[32]",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        internalType: "struct ISpokeConnector.Proof[]",
        name: "_proofs",
        type: "tuple[]",
      },
      {
        internalType: "bytes32",
        name: "_aggregateRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "_aggregatePath",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_aggregateIndex",
        type: "uint256",
      },
    ],
    name: "proveAndProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_encodedData",
        type: "bytes",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class ISpokeConnector__factory {
  static readonly abi = _abi;
  static createInterface(): ISpokeConnectorInterface {
    return new utils.Interface(_abi) as ISpokeConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISpokeConnector {
    return new Contract(address, _abi, signerOrProvider) as ISpokeConnector;
  }
}
