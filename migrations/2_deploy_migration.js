/* eslint-disable no-undef */
const hqnNFT = artifacts.require('hqnNFT')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(hqnNFT, 'HQN NFTs', 'TNT', 10, accounts[1])
}