import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState ({
    /* Ẩn hiện các trang Tạo NFT, Mua NFT*/
    modal: 'scale-0',
    showModal: 'scale-0',
    updateModal: 'scale-0',
    loadingPage: {show: false, msg: 'Đang thực hiện...'}
})

/* Khai báo load trang */ 
const setLoadingMsg = (msg) => {
    const loadingPage = getGlobalState('loadingPage')
    setGlobalState('loadingPage', {...loadingPage, msg})
}

export {useGlobalState, setGlobalState, getGlobalState, setLoadingMsg}
