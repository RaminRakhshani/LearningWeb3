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

    //1.
    // //get ganach addresses
    // const addresses = await web3.eth.getAccounts();

    // // console.log(addresses[0]);
    // //send transaction
    // const receipt = await contract.methods.setData(10).send({
    //     from: addresses[0],
    //     //gas: 100
    //     //gasPrice: 100
    // });

    //2.
    // contract.methods.setData(10).send({
    //     from: addresses[0],
    //     //gas: 100
    //     //gasPrice: 100
    // })
    //     .then(receipt => {
    //         //put your codes
    //     })
    //     .catch(error => {
    //         //catch the error
    //     });

    //3.
    // contract.methods.setData(10).send({
    //     from: addresses[0],
    //     //gas: 100
    //     //gasPrice: 100
    // })
    //     .on('receipt', receipt => {

    //     })
    //     .on('confirmation', (confirmationNumber, receipt) => {

    //     })
    //     .on('error', (error, receipt) => {

    //     });

    //4.
    contract.methods.setData(10).send({
        from: addresses[0],
        //gas: 100
        //gasPrice: 100
    }, function (receipt) { });

    const result = await contract.methods.getData().call();
    console.log(result);
}

init();