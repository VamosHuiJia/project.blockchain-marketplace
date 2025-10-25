import React, { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import HeroArt from '../assets/HeroArt.jpg'
import { setGlobalState, useGlobalState } from '../store'

const CreateNFT = () => {
    const [modal] = useGlobalState('modal')

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    const [imgBase64, setImgBase64] = useState(null)


    const handleSubmit = (e) => {
        e.preventdefault()

        if(!title || !description || !price) return
        console.log("Đang thêm ...")

        resetForm()
    }

    const closeModal = () => {
        setGlobalState('modal', 'scale-0')
        resetForm()
    }

    const resetForm = () => {
        setFileUrl('')
        setImgBase64(null)
        setTitle('')
        setDescription('')
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
                        Thêm sản phẩm tại đây
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
                            src={imgBase64} 
                            alt='Hero'
                            className='h-full w-full object-cover cursor-pointer'/>
                    </div>
                </div>

                {/* Chọn ảnh */}
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                    <label className='block'>
                        <span className='sr-only'>Chọn ảnh</span>
                        <input className='block w-full text-sm text-slate-500 
                            file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold 
                            hover:file:bg-[#1d2631] hover:file:text-white focus:outline-none hover:file:cursor-pointer cursor-pointer focus:ring-0 '
                            type="file"
                            accept='image/png, image/gif, image/jpg, image/jpeg, image/webp' 
                            required />
                    </label>
                </div>

                {/* Tên sản phẩm */}
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                    <input className='block w-full text-sm text-slate-500 bg-transparent border-0
                        focus:outline-none cursor-pointer focus:ring-0'
                        type="text"
                        placeholder='Tên sản phẩm'
                        name='title'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required />
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

                {/* Mô tả */}
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                    <textarea className='block w-full text-sm text-slate-500 bg-transparent border-0 h-20 resize-none
                        focus:outline-none cursor-pointer focus:ring-0'
                        type="text"
                        placeholder='Mô tả sản phẩm'
                        name='description'
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        required>
                    </textarea>
                </div>

                <button  className="flex justify-center items-center shadow-lg  
                shadow-black text-white w-full text-md font-bold my-5
                bg-[#f7005f] hover:bg-[#bd255f] cursor-pointer rounded-full py-2 px-5">
                    Thêm sản phẩm
                </button>
            </form>
        </div>
    </div>
  )
}

export default CreateNFT