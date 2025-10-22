import React from 'react'
import HeroArt from '../assets/HeroArt.jpg'

const Products = () => {
  return (
    <div className='bg-[#151c25] gradient-bg-products'>
      <div className='w-4/5 py-10 mx-auto'>
        <h4 className='text-white text-3xl font-bold uppercase text-gradient'>
          Sản phẩm mới nhất
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
          {Array(4).fill().map((nft, i) => (
            <Card key={i} nft={i + 1} /> 
          ))}
        </div>

      </div>
    </div>
  )
}

const Card = ({ nft }) => {
  return (
    <div className='w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3'>
      <img className='h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3'
        src={HeroArt} alt="NFT Image" />

      <h4 className='text-white font-semibold'>
        NFT #{nft}
      </h4>

      <p className='text-gray-400 text-sm my-1'>
        Xin chao Viet Nam
      </p>

      <div className='flex justify-between items-center mt-3 text-white'>
        <div className="flex flex-col">
          <small className='text-xs'>Gia tien</small>
          <p className='text-sm font-semibold'>0.55 ETH</p>
        </div>

        <button  className="shadow-lg shadow-black text-white text-sm bg-[#e32970] hover:bg-[#bd255f] cursor-pointer rounded-full py-2 px-3">
          Xem chi tiết
        </button>
      </div>

    </div>
  )
}

export default Products