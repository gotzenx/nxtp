// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import {MerkleTreeManager} from "../../contracts/messaging/MerkleTreeManager.sol";
import {MerkleLib} from "../../contracts/messaging/libraries/MerkleLib.sol";

import "../utils/ForgeHelper.sol";

contract MerkleTreeManagerForTest is MerkleTreeManager {
  function untrackInsert(bytes32[] memory _leaves) external {
    insert(_leaves);
  }
}

abstract contract GasComparisonSetUp is ForgeHelper {
  MerkleTreeManagerForTest public merkle;

  bytes32[] public leaves;
  uint public LEAVES_AMOUNT = 5;

  function setUp() public {
    merkle = new MerkleTreeManagerForTest();
    merkle.initialize(address(this));

    for (uint256 i = 0; i < LEAVES_AMOUNT; i++) {
        leaves.push(keccak256(abi.encode(i)));
    }
  }
}

contract Insert is GasComparisonSetUp {
  function test_InsertsGenerateSameRoot(bytes32[] calldata _leaves) external virtual {
    vm.assume(_leaves.length < 700);

    MerkleTreeManagerForTest _merkleMemory = new MerkleTreeManagerForTest();
    _merkleMemory.initialize(address(this));
    _merkleMemory.untrackInsert(_leaves);
    (bytes32 _rootA,) = _merkleMemory.insert(_leaves);

    MerkleTreeManagerForTest _merkleStorage = new MerkleTreeManagerForTest();
    _merkleStorage.initialize(address(this));
    _merkleStorage.untrackInsert(_leaves);
    (bytes32 _rootB,) = _merkleStorage.insertStorage(_leaves);

    assertEq(_rootA, _rootB);
  }

  function test_InsertInEmptyTreeWithMemory() external virtual {
    merkle.insert(leaves);
  }

  function test_InsertInEmptyTreeWithStorage() external virtual {
    merkle.insertStorage(leaves);
  }

  function test_InsertMemoryWhenTreeIsNotEmpty() external virtual {
    merkle.untrackInsert(leaves);
    merkle.untrackInsert(leaves);
    merkle.untrackInsert(leaves);

    merkle.insert(leaves);
  }

  function test_InsertStorageWhenTreeIsNotEmpty() external virtual {
    merkle.untrackInsert(leaves);
    merkle.untrackInsert(leaves);
    merkle.untrackInsert(leaves);

    merkle.insertStorage(leaves);
  }

  function test_DoubleInsertMemoryWhenTreeIsNotEmpty() external virtual {
    merkle.untrackInsert(leaves);
    merkle.untrackInsert(leaves);
    merkle.untrackInsert(leaves);

    merkle.insert(leaves);
    merkle.insert(leaves);
  }

  function test_DoubleInsertStorageWhenTreeIsNotEmpty() external virtual {
    merkle.untrackInsert(leaves);
    merkle.untrackInsert(leaves);
    merkle.untrackInsert(leaves);

    merkle.insertStorage(leaves);
    merkle.insertStorage(leaves);
  }
}