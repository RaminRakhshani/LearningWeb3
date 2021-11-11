const Web3 = require('web3');

const MyContract = require('./build/contracts/SendEtherToSmartContract.json');

const init = async () => {
    const web3 = new Web3('HTTP://127.0.0.1:7545');

    const id = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[id];
    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    );


    //get ganach addresses
    const addresses = await web3.eth.getAccounts();

    // console.log(addresses[0]);
    //send transaction
    const receipt = await contract.methods.sendEther().send({
        from: addresses[0],
        value: '100000'//100 wei,
        //gas: 100
        //gasPrice: 100
    });

    const result = await contract.methods.functionCalled().call();
    console.log(result);
}

init();