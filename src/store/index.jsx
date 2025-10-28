import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState ({
    /* Ẩn hiện các trang Tạo NFT, Mua NFT*/
    modal: 'scale-0',
    showModal: 'scale-0',
    updateModal: 'scale-0',
    loadingPage: {show: false, msg: 'Đang thực hiện...'},
    alert: { show: false, msg: '', color: '' },
})

/* Khai báo load trang */ 
const setLoadingMsg = (msg) => {
    const loadingPage = getGlobalState('loadingPage')
    setGlobalState('loadingPage', {...loadingPage, msg})
}

/* Khai báo quá trình giao dịch */ 
const setAlert = (msg, color = 'green') => {
  setGlobalState('loadingPage', false)
  setGlobalState('alert', { show: true, msg, color })
  setTimeout(() => {
    setGlobalState('alert', { show: false, msg: '', color })
  }, 6000)
}

export {useGlobalState, setGlobalState, getGlobalState, setLoadingMsg, setAlert}
