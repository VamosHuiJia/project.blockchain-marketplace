import Web3 from 'web3'
import { setGlobalState, setAlert, getGlobalState } from './store'
import abi from './abis/hqnNFT.json'

let web3 = null 
let listenersBound = false

const SEPOLIA_CHAIN_ID_HEX = '0xaa36a7' // 11155111 (Sepolia)
const FALLBACK_CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS

// Tránh đổi tài khoản bị "dẫm lên nhau"
const bindWalletListenersOnce = () => {
  if (!window.ethereum || listenersBound) return
  listenersBound = true

  window.ethereum.on('chainChanged', () => {
    window.location.reload()
  })

  window.ethereum.on('accountsChanged', async (newAccounts) => {
    const acc = (newAccounts && newAccounts[0]) ? newAccounts[0].toLowerCase() : ''
    setGlobalState('connectedAccount', acc)
    try {
      await getAllNFTs()
    } catch (e) {
      console.warn('getAllNFTs failed after accountsChanged:', e?.message || e)
    }
  })
}


const ensureLocalChain = async () => {
  if (!window.ethereum) throw new Error('Vui lòng cài MetaMask.')

  // ✅ Sepolia testnet
  const targetChainIdHex = SEPOLIA_CHAIN_ID_HEX

  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: targetChainIdHex }],
    })
  } catch (e) {
    if (e.code === 4902) {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: targetChainIdHex,
          chainName: 'Sepolia Testnet',
          rpcUrls: [process.env.REACT_APP_SEPOLIA_RPC || 'https://sepolia.infura.io/v3/YOUR_INFURA_KEY'],
          nativeCurrency: { name: 'Sepolia ETH', symbol: 'SEP', decimals: 18 },
        }],
      })
    } else {
      throw e
    }
  }
}


// 2) Khởi tạo Web3 
const ensureWeb3 = async () => {
  if (!window.ethereum) reportError('Vui lòng cài đặt MetaMask hoặc cung cấp provider.')

  const cur = await window.ethereum.request({ method: 'eth_chainId' })
  if (cur !== SEPOLIA_CHAIN_ID_HEX) {
    await ensureLocalChain()
  }

  if (!web3) web3 = new Web3(window.ethereum)
  return web3
}


// 3) Lấy instance contract 
const getEthereumContract = async () => {
  const w3 = await ensureWeb3()
  const networkId = await w3.eth.net.getId()

  let contractAddress = abi.networks?.[networkId]?.address

  if (!contractAddress && FALLBACK_CONTRACT_ADDRESS) {
    contractAddress = FALLBACK_CONTRACT_ADDRESS
  }

  if (!contractAddress) {
    reportError(`Không tìm thấy địa chỉ contract cho networkId=${networkId}`)
  }

  return new w3.eth.Contract(abi.abi, contractAddress)
}

// 4) Kết nối ví
const connectWallet = async () => {
  try {
    await ensureLocalChain()
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    setGlobalState('connectedAccount', accounts[0].toLowerCase())

    await ensureWeb3()
    bindWalletListenersOnce()
    return accounts[0]
  } catch (error) {
    reportError(error)
  }
}

// 5) Kiểm tra ví đã kết nối chưa
const isWalletConnected = async () => {
  try {
    if (!window.ethereum) return reportError('Vui lòng cài đặt MetaMask trước.')
    const accounts = await window.ethereum.request({ method: 'eth_accounts' })

    bindWalletListenersOnce()

    if (accounts.length) {
      setGlobalState('connectedAccount', accounts[0].toLowerCase())
      await ensureWeb3()
    } else {
      setGlobalState('connectedAccount', '')
      setAlert('Vui lòng kết nối tới ví của bạn.', 'red')
    }
  } catch (error) {
    reportError(error)
  }
}

// 6) Chuẩn hóa dữ liệu
const structuredNfts = (nfts) => {
  return nfts
    .map((nft) => ({
      id: Number(nft.id),
      owner: nft.owner.toLowerCase(),
      cost: Web3.utils.fromWei(nft.cost),
      title: nft.title,
      description: nft.description,
      metadataURI: nft.metadataURI,
      timestamp: nft.timestamp,
    }))
    .reverse()
}

// 7) API
const getAllNFTs = async () => {
  try {
    await ensureWeb3()
    const contract = await getEthereumContract()
    const nfts = await contract.methods.getAllNFTs().call()
    const transactions = await contract.methods.getAllTransactions().call()
    setGlobalState('nfts', structuredNfts(nfts))
    setGlobalState('transactions', structuredNfts(transactions))
    return true

  } catch (error) {
    console.warn('getAllNFTs error:', error?.message || error)
    setGlobalState('nfts', [])
    setGlobalState('transactions', [])
    return false
  }
}

const mintNFT = async ({ title, description, metadataURI, price }) => {
  try {
    // connect trước, rồi mới lấy web3
    let account = getGlobalState('connectedAccount')
    if (!account) {
      const acc = await connectWallet()
      account = acc?.toLowerCase()
      setGlobalState('connectedAccount', account || '')
    }
    const w3 = await ensureWeb3()

    const contract  = await getEthereumContract()
    const mintPrice = Web3.utils.toWei('0.01', 'ether')
    const priceWei  = Web3.utils.toWei(price.toString(), 'ether')

    await contract.methods
      .payToMint(title, description, metadataURI, priceWei)
      .send({ from: account, value: mintPrice })

    return true
  } catch (error) {
    reportError(error)
  }
}

const buyNFT = async ({ id, cost }) => {
  try {
    let buyer = getGlobalState('connectedAccount')
    if (!buyer) {
      const acc = await connectWallet()
      buyer = acc?.toLowerCase()
      setGlobalState('connectedAccount', buyer || '')
    }

    await ensureWeb3()
    const contract = await getEthereumContract()
    const costWei = Web3.utils.toWei(cost.toString(), 'ether')

    await contract.methods.payToBuy(Number(id)).send({ from: buyer, value: costWei })
    return true
  } catch (error) {
    reportError(error)
  }
}

const updateNFT = async ({ id, cost }) => {
  try {
    await ensureWeb3()
    const contract = await getEthereumContract()
    const owner = getGlobalState('connectedAccount')
    const costWei = Web3.utils.toWei(cost.toString(), 'ether')

    await contract.methods.changePrice(Number(id), costWei).send({ from: owner })
  } catch (error) {
    reportError(error)
  }
}

// 8) Báo lỗi giữ nguyên thông điệp thật
const reportError = (error) => {
  const message = typeof error === 'string' ? error : (error?.message || JSON.stringify(error))
  setAlert(message, 'red')
  throw new Error(message)
}

export { connectWallet, isWalletConnected, mintNFT, getAllNFTs, updateNFT, buyNFT }
