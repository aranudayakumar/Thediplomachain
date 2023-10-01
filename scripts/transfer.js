// scripts/transfer.js

module.exports = async (callback) => {
    try {
      const accounts = await web3.eth.getAccounts();
      await web3.eth.sendTransaction({ from: accounts[0], to: accounts[1], value: web3.utils.toWei('1', 'ether') });
      callback();
      console.log("hello")
    } catch (error) {
      console.error(error);
      callback(error);
    }
  };
  