const MyContract = artifacts.require("MyContract");

module.exports = async function (deployer, _, accounts) {
  await deployer.deploy(MyContract);
  await web3.eth.sendTransaction({
    from: accounts[0],
    to: '0x4a9A3A08E0E7242982e83354434147A93060cE90',
    value: web3.utils.toWei('1', 'ether')
  })
};
