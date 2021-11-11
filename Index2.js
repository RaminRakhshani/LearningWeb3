const Web3 = require('web3');

const MyContract = require('./MyContract.json');

const init = async () => {
    const web3 = new Web3('http://localhost:7545');

    const id = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[id];
    const contract = new web3.eth.contract(
        MyContract.abi,
        deployedNetwork.address
    );
}

init();