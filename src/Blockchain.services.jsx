import Web3 from 'web3'
import { setGlobalState, setAlert, getGlobalState } from './store'
import abi from './abis/hqnNFT.json'

const { ethereum } = window
window.web3 = new Web3(ethereum)
window.web3 = new Web3(window.web3.currentProvider)

// Kết nối tài khoản
const getEtheriumContract = async () => {
  const web3 = window.web3
  const networkId = await web3.eth.net.getId()
  const networkData = abi.networks[networkId]

  if (networkData) {
    const contract = new web3.eth.Contract(abi.abi, networkData.address)
    return contract
  } else {
    return null
  }
}

// Kiểm tra kết nối tới ví ETH
const connectWallet = async () => {
    try {
        if(!ethereum) return alert ('Vui lòng cài đặt Metamask trước') 
        const accounts = await ethereum.request({ method: 'eth_requestAccounts'})
        setGlobalState('connectedAccount', accounts[0].toLowerCase())
    }
    catch (error) {
        reportError[error]
    }
}

// Khi đã kết nối thành công
const isWalletConnected = async () => {
    try {
        if (!ethereum) return reportError('Please install Metamask')
        const accounts = await ethereum.request({ method: 'eth_accounts' })

        window.ethereum.on('chainChanged', (chainId) => {
            window.location.reload()
        })

        window.ethereum.on('accountsChanged', async () => {
            setGlobalState('connectedAccount', accounts[0].toLowerCase())
            await isWallectConnected()
        })

        if (accounts.length) {
            setGlobalState('connectedAccount', accounts[0].toLowerCase())
        } else {
            setGlobalState('connectedAccount', '')
            reportError('Please connect wallet.')
        }
    } catch (error) {
        reportError(error)
    }
}

// Báo cáo lỗi
const reportError = (error) => {
    setAlert(JSON.stringify(error), 'red')
    throw new Error('Không có đối tượng Ethereum.')
}

export {connectWallet, isWalletConnected}