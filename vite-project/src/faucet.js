const Web3 = require('web3');
const web3 = new Web3('<YOUR_INFURA_PROJECT_URL>'); // You'll need to sign up for an Infura account to get a project URL.

const privateKey = '<YOUR_PRIVATE_KEY>'; // The private key of the account that will fund the faucet.
const sender = web3.eth.accounts.privateKeyToAccount(privateKey);

async function sendEtherToMetamask() {
  const receiverAddress = '<YOUR_METAMASK_ADDRESS>';
  const amountInWei = web3.utils.toWei('0.01', 'ether'); // Change the amount as needed.

  const transaction = {
    from: sender.address,
    to: receiverAddress,
    value: amountInWei,
  };

  const gas = await web3.eth.estimateGas(transaction);

  transaction.gas = gas;
  transaction.gasPrice = await web3.eth.getGasPrice();

  const signedTransaction = await web3.eth.accounts.signTransaction(transaction, privateKey);
  const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

  console.log('Transaction hash:', receipt.transactionHash);
}

sendEtherToMetamask().catch(console.error);
