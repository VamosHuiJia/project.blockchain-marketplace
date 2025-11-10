import React, { useState } from 'react'
import {FaTimes} from 'react-icons/fa'

import HeroArt from '../assets/HeroArt.jpg'
import { setGlobalState, useGlobalState, setLoadingMsg, setAlert } from '../store'
import { updateNFT, buyNFT } from '../Blockchain.services'

const UpdateProduct = () => {
    const [modal] = useGlobalState('updateModal')
    const [nft] = useGlobalState('nft')
    const [price, setPrice] = useState(nft?.cost)

    const handleSubmit = async(e) => {
        e.preventdefault()

        if (!price || price <= 0) return

        setGlobalState('modal', 'scale-0')
        setGlobalState('loadingPage', { show: true, msg: 'Đang cập nhật thay đổi ...' })

        try {
            setLoadingMsg('Đang cập nhật giá ...')
            setGlobalState('updateModal', 'scale-0')

            await updateNFT({ id: nft.id, cost: price })
            setAlert('Đã cập nhật giá', 'green')
            window.location.reload()
        } catch (error) {
            console.log('Đã xảy ra lỗi ', error)
            setAlert('Cập nhật không thành công', 'red')
        }
    }

    const closeModal = () => {
        setGlobalState('updateModal', 'scale-0')
        resetForm()
    }

    const resetForm = () => {
        setPrice('')
    }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 
        ${modal}`}>
        <div className='bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>
            <form className='flex flex-col'
                onSubmit={handleSubmit}>
                <div className='flex justify-between items-center text-gray-400'>
                    <p className='font-semibold'>
                        Cập nhật giá sản phẩm
                    </p>

                    <button className='border-0 bg-transparent focus:outline-none'
                        type='button'
                        onClick={closeModal}>
                        <FaTimes />
                    </button>
                </div>

                {/* Hiện ảnh */}
                <div className='flex justify-center items-center rounded-xl mt-5'>
                    <div className='shrink-0 rounded-xl overflow-hidden h-20 w-20'>
                        <img 
                            src={HeroArt} 
                            alt='NFT'
                            className='h-full w-full object-cover cursor-pointer'/>
                    </div>
                </div>

                {/* Giá */}
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                    <input className='block w-full text-sm text-slate-500 bg-transparent border-0
                        focus:outline-none cursor-pointer focus:ring-0'
                        type="number"
                        placeholder='Giá (ETH)'
                        min={0.01}
                        step={0.01}
                        name='price'
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        required />
                </div>

                <button  className="flex justify-center items-center shadow-lg  
                shadow-black text-white w-full text-md font-bold my-5
                bg-[#f7005f] hover:bg-[#bd255f] cursor-pointer rounded-full py-2 px-5">
                    Cập nhật
                </button>
            </form>
        </div>
    </div>
  )
}

export default UpdateProduct