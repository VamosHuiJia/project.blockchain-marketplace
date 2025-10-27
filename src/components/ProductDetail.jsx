import React, { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import Identicon from 'react-identicons'

import HeroArt from '../assets/HeroArt.jpg'
import { setGlobalState, useGlobalState } from '../store'

const ProductDetail = () => {
    const [modal] = useGlobalState('showModal')

    const handleSubmit = (e) => {
        console.log("Đang thêm ...")
    }

    const closeModal = () => {
        setGlobalState('showModal', 'scale-0')
    }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 
        ${modal}`}>
        <div className='bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-3/5 h-7/12 p-6'>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center text-gray-400'>
                    <p className='font-semibold'>
                        Mua NFT
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
                            src={HeroArt} 
                            alt='NFT'
                            className='h-full w-full object-cover cursor-pointer'/>
                    </div>
                </div>

                <div className='flex flex-col justify-start rounded-xl mt-5'>
                    <h4 className='text-white font-semibold'>
                        Tên sản phẩm
                    </h4>

                    <p className='text-gray-400 text-xs my-1'>
                        Mô tả sản phẩm
                    </p>

                    <div className='flex justify-between items-center mt-3 text-white'>
                        <div className='flex justify-start items-center'>
                            <Identicon className="h-10 w-10 object-contain rounded-full mr-3" 
                                string={'Tên người bán'} size={50}/>

                            <div className='flex flex-col justify-center items-start'>
                                <small className='text-white font-bold'>Người đăng</small>
                                <small className='text-pink-800 font-semibold'>0x31....037e</small>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <small className='text-xs'>Giá sản phẩm</small>
                            <p className='text-sm font-semibold'>0.34 ETH</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center space-x-2'>
                    <button  className="flex justify-center items-center shadow-lg
                        shadow-black text-white w-full text-md font-semibold my-5
                        bg-[#f7005f] hover:bg-[#bd255f] cursor-pointer rounded-full py-2 px-5">
                        Mua sản phẩm
                    </button>

                    <button  className="flex justify-center items-center shadow-lg  
                        shadow-black text-white w-full text-md font-semibold my-5
                        bg-[#f7005f] hover:bg-[#bd255f] cursor-pointer rounded-full py-2 px-5">
                        Quay lại
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail