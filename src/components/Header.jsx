import React from 'react'
import Headerlogo from '../assets/H.Q.N_logo.png'
import { connectWallet, connectedAccount } from '../Blockchain.services'
import { useGlobalState, truncate } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <div className='w-4/5 flex justify-between md:justify-center items-center py-2 mx-auto'>
        {/* Logo */}
        <div className='md:flex-[0.5] flex-initial justify-center items-center'>
            <img className='w-45 cursor-pointer' src={Headerlogo} alt="logo" />
        </div>

        {/* Danh mục */}
        <ul className='md:flex-[0.5] md:flex text-white hidden list-none justify-around items-center flex-initial font-bold min-w-fit'>
            <li className='mx-2 cursor-pointer'>Sản phẩm</li>
            <li className='mx-2 cursor-pointer'>Tác giả</li>
            <li className='mx-2 cursor-pointer'>Tính năng</li>
            <li className='mx-2 cursor-pointer'>Cộng đồng</li>
        </ul>

        {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white font-bold
          bg-[#e32970] hover:bg-[#bd255f] md:text-sm p-3
            rounded-full cursor-pointer"
          >
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            className="shadow-xl shadow-black text-white font-bold
          bg-[#e32970] hover:bg-[#bd255f] md:text-sm p-3
            rounded-full cursor-pointer"
            onClick={connectWallet}
          >
            Ví của bạn
          </button>
        )}
    </div>
  )
}

export default Header