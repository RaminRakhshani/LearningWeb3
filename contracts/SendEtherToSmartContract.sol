// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SendEtherToSmartContract {
    string public functionCalled;

    function sendEther() external payable {
        functionCalled = "sendEther";
    }

    // function fallback() external payable {
    //     functionCalled = "fallback";
    // }

    // receive() external payable {
    //     functionCalled = "fallback";
    // }
}
