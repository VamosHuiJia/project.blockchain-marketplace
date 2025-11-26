import React, { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import Identicon from 'react-identicons'

import HeroArt from '../assets/HeroArt.jpg'
import { setGlobalState, useGlobalState, truncate, setAlert } from '../store'
import { buyNFT } from '../Blockchain.services'

const ProductDetail = () => {
    const [modal] = useGlobalState('showModal')
    const [connectedAccount] = useGlobalState('connectedAccount')
    const [nft] = useGlobalState('nft')

    const onChangePrice = () => {
        setGlobalState('showModal', 'scale-0')
        setGlobalState('updateModal', 'scale-100')
    }

    const handleNFTPurchase = async () => {
        if (connectedAccount?.toLowerCase() === nft?.owner?.toLowerCase()) {
            setAlert('Bạn là chủ sở hữu NFT này — không thể tự mua.', 'red')
            return
        }
        setGlobalState('showModal', 'scale-0')
        setGlobalState('loadingPage', {
            show: true,
            msg: 'Đang đợi phản hồi từ Metamask...',
        })

        try {
            await buyNFT(nft)
            setAlert('Giao dịch thành công', 'green')
            window.location.reload()
        } catch (error) {
            console.log('Đã xảy ra lỗi giao dịch', error)
            setAlert('Giao dịch thất bại', 'red')
        }
    }

    const closeModal = () => {
        setGlobalState('showModal', 'scale-0')
    }


    return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 
        ${modal}`}>
        <div className='bg-[#151c25] shadow-xl shadow-[#13533e] rounded-xl w-11/12 md:w-3/5 h-7/12 p-6'>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center text-gray-400'>
                    <p className='font-semibold'>
                        Mua sản phẩm với NFT
                    </p>

                    <button className='border-0 bg-transparent focus:outline-none'
                        type='button'
                        onClick={closeModal}>
                        <FaTimes />
                    </button>
                </div>

                {/* Hiện ảnh */}
                <div className='flex justify-center items-center rounded-xl mt-5'>
                    <div className='shrink-0 rounded-xl overflow-hidden h-40 w-40'>
                        <img 
                            src={nft?.metadataURI} 
                            alt={nft?.title}
                            className='h-full w-full object-cover cursor-pointer'/>
                    </div>
                </div>

                <div className='flex flex-col justify-start rounded-xl mt-5'>
                    <h4 className='text-white font-semibold'>
                        {nft?.title}
                    </h4>

                    <p className='text-gray-400 text-xs my-1'>
                        {nft?.description}
                    </p>

                    <div className='flex justify-between items-center mt-3 text-white'>
                        <div className='flex justify-start items-center'>
                            <Identicon className="h-10 w-10 object-contain rounded-full mr-3" 
                                string={nft?.owner} 
                                size={50}/>

                            <div className='flex flex-col justify-center items-start'>
                                <small className='text-white font-bold'>Người đăng</small>
                                <small className='text-green-700 font-semibold'>
                                    {nft?.owner ? truncate(nft.owner, 4, 4, 11) : '...'}
                                </small>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <small className='text-xs'>Giá sản phẩm</small>
                            <p className='text-sm font-semibold'>{nft?.cost} ETH</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center space-x-2'>
                    {connectedAccount?.toLowerCase() !== nft?.owner?.toLowerCase() ? (
                        <button  className="flex justify-center items-center shadow-lg
                            shadow-black text-white w-full text-md font-semibold my-5
                            bg-[#13533e] hover:bg-[#15806c] cursor-pointer rounded-full py-2 px-5"
                            onClick={handleNFTPurchase}>
                            Mua sản phẩm
                        </button>
                    ) : (
                        <button  className="flex justify-center items-center shadow-lg  
                            shadow-black text-white w-full text-md font-semibold my-5
                            bg-[#13533e] hover:bg-[#15806c] cursor-pointer rounded-full py-2 px-5"
                            onClick={onChangePrice}>
                            Cập nhật giá
                        </button>
                    )}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail