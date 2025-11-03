import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState ({
    /* Ẩn hiện các trang Tạo NFT, Mua NFT*/
    modal: 'scale-0',
    showModal: 'scale-0',
    updateModal: 'scale-0',
    loadingPage: {show: false, msg: 'Đang thực hiện...'},
    alert: { show: false, msg: '', color: '' },
    connectedAccount: '',
    nft: null,
    nfts: [],
    transactions: [],
    contract: null,
})

/* Khai báo load trang */ 
const setLoadingMsg = (msg) => {
    setGlobalState('loadingPage', { show: true, msg})
}

/* Khai báo quá trình giao dịch */ 
const setAlert = (msg, color = 'green') => {
  setGlobalState('loadingPage', false)
  setGlobalState('alert', { show: true, msg, color })
  setTimeout(() => {
    setGlobalState('alert', { show: false, msg: '', color })
  }, 6000)
}

/* Xử lý độ dài câu -> dài quá sẽ cho thành ... */ 
const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    var start = text.substring(0, startChars)
    var end = text.substring(text.length - endChars, text.length)
    while (start.length + end.length < maxLength) {
      start = start + '.'
    }
    return start + end
  }
  return text
}

export {useGlobalState, setGlobalState, getGlobalState, setLoadingMsg, setAlert, truncate}
