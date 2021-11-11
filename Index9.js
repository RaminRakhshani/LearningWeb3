const { settings } = require('cluster');
const Web3 = require('web3');

const MyContract = require('./build/contracts/ListenToEvent.json');

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
    await contract.methods.emitEvent('hey').send({
        from: addresses[0],
    });

    contract.events.MyEvent({})
        .on('data', event => console.log(event));

    await new Promise(resolve => setTimeout(() => resolve), 2000);

    await contract.methods.emitEvent('hey hey').send({
        from: addresses[0],
    });
}

init();