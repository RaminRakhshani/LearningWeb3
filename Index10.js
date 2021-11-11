const { settings } = require('cluster');
const Web3 = require('web3');

const MyContract = require('./build/contracts/MyContract.json');

const HDWalletProvider = require('@truffle/hdwallet-provider');

const address = '0x4a9A3A08E0E7242982e83354434147A93060cE90';
const privateKey = '0x795f86fce5b26b02a0f12c5f47c89681d2bff8e0f052d33beefb61b289d7b2d1';


const init = async () => {
    const provider = new HDWalletProvider(privateKey, 'HTTP://127.0.0.1:7545')
    const web3 = new Web3(provider);

    const id = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[id];
    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    );

    await contract.methods.setData(10).send({ from: address });

    const result = await contract.methods.getData().call();

    console.log(result);
}

init();