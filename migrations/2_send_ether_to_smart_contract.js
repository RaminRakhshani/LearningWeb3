const SendEtherToSmartContract = artifacts.require("SendEtherToSmartContract");

module.exports = function (deployer) {
  deployer.deploy(SendEtherToSmartContract);
};
