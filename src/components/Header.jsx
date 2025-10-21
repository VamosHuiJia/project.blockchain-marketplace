import React from 'react'
import Headerlogo from '../assets/H.Q.N_logo.png'

const Header = () => {
  return (
    <div className='w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto'>
        {/* Logo */}
        <div className='md:flex-[0.5] flex-initial justify-center items-center'>
            <img className='w-40 cursor-pointer' src={Headerlogo} alt="logo" />
        </div>

        {/* Danh mục */}
        <ul className='md:flex-[0.5] md:flex text-white hidden list-none justify-between items-center flex-initial'>
            <li className='mx-2 cursor-pointer'>Sản phẩm</li>
            <li className='mx-2 cursor-pointer'>Tác giả</li>
            <li className='mx-2 cursor-pointer'>Tính năng</li>
            <li className='mx-4 cursor-pointer'>Cộng đồng</li>
        </ul>

        <button className='shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] md:text-xl p-2 ml-4 rounded-full'>
            Ví của bạn
        </button>

    </div>
  )
}

export default Header