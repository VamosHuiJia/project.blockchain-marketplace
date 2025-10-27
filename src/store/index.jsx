import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState ({
    /* Ẩn hiện các trang Tạo NFT, Mua NFT*/
    modal: 'scale-0',
    showModal: 'scale-100'
})

export {useGlobalState, setGlobalState, getGlobalState}
