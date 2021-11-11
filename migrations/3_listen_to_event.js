const ListenToEvent = artifacts.require("ListenToEvent");

module.exports = function (deployer) {
  deployer.deploy(ListenToEvent);
};
