let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

async function transfer() {
    try {
        let accounts = await web3.eth.getAccounts();
        let sender = accounts[0];
        let receiver = document.getElementById("receiver").value;
        let amount = web3.utils.toWei(document.getElementById("amount").value, "ether");

        await web3.eth.sendTransaction({
            from: sender,
            to: receiver,
            value: amount
        });

        alert("Transaction successful!");
    } catch (error) {
        alert("Transaction failed: " + error.message);
    }
}
