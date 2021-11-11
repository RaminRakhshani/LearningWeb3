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

    //get ganach addresses
    const addresses = await web3.eth.getAccounts();

    // console.log(addresses[0]);
    //send transaction
    contract.methods.setData(10).send({
        from: addresses[0],
        //gas: 100
        //gasPrice: 100
    })
        .then(receipt => {
            //put your codes
        })
        .catch(error => {
            //catch the error
        });

    const result = await contract.methods.getData().call();
    console.log(receipt);
    console.log(result);
}

init();