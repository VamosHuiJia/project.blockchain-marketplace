/* eslint-disable no-undef */
const hqnNFT = artifacts.require('hqnNFT')

module.exports = async (deployer, network, accounts) => {
  const artist = accounts[0]

  await deployer.deploy(hqnNFT, 'HQN NFTs', 'TNT', 10, artist)
}
