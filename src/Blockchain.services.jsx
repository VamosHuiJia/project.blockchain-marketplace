import web3 from 'web3'
import { setGlobalState, setAlert, getGlobalState } from './store'
import abi from './abis/hqnNFT.json'

const { ethereum } = window
window.web3 = new Web3(ethereum)
window.web3 = new Web3(window.web3.currentProvider)

const getEthereumContract = async () => {
    const connectedAccount = getGlobalState('connectedAccount') 

    if(connectedAccount) {
        const web3 = window.web3
        const networkId = await web3.eth.net.getId()
        const networkData = abi.networks[networkId]

        if(networkData) {
            const contract = new web3.eth.Contract(abi.abi, networkData.address)
            return contract
        }
        else {
            return null
        }
    }
    else {
        return getGlobalState('contract')
    }
} 

const connectWallet = async () => {
    try {
        if(!ethereum) return alert ('Vui lòng cài đặt Metamask trước') 
        const accounts = await ethereum.request({ method: 'eth_accounts'})

        window
    }
    catch (error) {

    }
}