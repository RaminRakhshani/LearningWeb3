const Web3 = require('web3');

const provider = new Web3.providers.HttpProvider('http://localhost:7545');
const web3 = new Web3(provider);
// const web3 = new Web3('http://localhost:7545');
//connected to the blockchain