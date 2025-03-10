/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  AmplificationUtils,
  AmplificationUtilsInterface,
} from "../../../../../contracts/core/connext/libraries/AmplificationUtils";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initialTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "futureTime",
        type: "uint256",
      },
    ],
    name: "RampA",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "currentA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "StopRampA",
    type: "event",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ec4057eb594ac83934440b1ae7402ce57806f039c477e35681a22992e173414464736f6c63430008110033";

type AmplificationUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AmplificationUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AmplificationUtils__factory extends ContractFactory {
  constructor(...args: AmplificationUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AmplificationUtils> {
    return super.deploy(overrides || {}) as Promise<AmplificationUtils>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AmplificationUtils {
    return super.attach(address) as AmplificationUtils;
  }
  override connect(signer: Signer): AmplificationUtils__factory {
    return super.connect(signer) as AmplificationUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AmplificationUtilsInterface {
    return new utils.Interface(_abi) as AmplificationUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AmplificationUtils {
    return new Contract(address, _abi, signerOrProvider) as AmplificationUtils;
  }
}
