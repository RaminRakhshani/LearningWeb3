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

    await contract.methods.emitEvent('hey hey').send({
        from: addresses[0],
    });

    const results = await contract.getPastEvents(
        'MyEvent',
        {
            fiter: {
                value: 'hey',//['hey', 'hey hey'],
                date: 1535353535,
            },
            fromBlock: 0
        });

    console.log(results);
}

init();