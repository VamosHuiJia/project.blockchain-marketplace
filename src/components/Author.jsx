import React from 'react'
import Author1 from '../assets/Vincent_van_Gogh.jpg'
import { setGlobalState } from '../store'

const Author = () => {
  return (
    <div className='gradient-bg-products'>
      <div className='w-4/5 py-10 mx-auto'>
        <h4 className='text-white text-3xl font-bold uppercase text-gradient'>
          Các tác giả nổi tiếng
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
          {Array(7).fill().map((nft, i) => (
            <Card key={i} nft={i + 1} /> 
          ))}
        </div>

        <div className='text-center my-5'>
          <button  className="shadow-lg shadow-black text-white text-sm font-bold bg-[#f7005f] hover:bg-[#bd255f] cursor-pointer rounded-lg py-2 px-5">
            Xem thêm
          </button>
        </div>
        
      </div>
    </div>
  )
}

const Card = ({ nft }) => {
  return (
    <div className='w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3'>
      <img className='h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3'
        src={Author1} alt="NFT Image" />

      <h4 className='text-white font-semibold'>
        Tác giả #{nft}
      </h4>

      <p className='text-gray-400 text-sm my-1 h-7'>
        Xin chào Việt Nam
      </p>


    </div>
  )
}

export default Author