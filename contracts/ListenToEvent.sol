// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ListenToEvent {
    event MyEvent(
        uint256 indexed id,
        uint256 indexed date,
        string indexed value
    );
    uint256 nextId;

    function emitEvent(string calldata value) external {
        emit MyEvent(nextId, block.timestamp, value);
        nextId++;
    }

    // function fallback() external payable {
    //     functionCalled = "fallback";
    // }

    // receive() external payable {
    //     functionCalled = "fallback";
    // }
}
