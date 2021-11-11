const Web3 = require('web3');

const MyContract = require('./MyContract.json');

const init = async () => {
    const web3 = new Web3('HTTP://127.0.0.1:7545');

    const id = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[id];
    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    );

    const result = await contract.methods.getData().call();
    console.log(result);
}

init();