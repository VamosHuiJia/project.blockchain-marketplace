import React from 'react'
import { useEffect, useState } from 'react'

import HeroArt from '../assets/HeroArt.jpg'
import { setGlobalState, useGlobalState, truncate } from '../store'

const Products = () => {
  const [nfts] = useGlobalState('nfts')

  // Định dạng hiển thị -> Xem thêm
  const [end, setEnd] = useState(4)
  const [count] = useState(4)
  const [collection, setCollection] = useState([])

  const getCollection = () => {
    return nfts.slice(0, end)
  }

  useEffect(() => {
    setCollection(getCollection())
  }, [nfts, end])

  return (
    <div className='bg-[#151c25] gradient-bg-products'>
      <div className='w-4/5 py-10 mx-auto'>
        <h4 className='text-white text-3xl font-bold uppercase text-gradient'>
          {collection.length > 0 ? 'Sản phẩm mới nhất' : 'Không có sản phẩm'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
          {collection.map((nft, i) => (
            <Card key={i} nft={nft} /> 
          ))}
        </div>

        
        {collection.length > 0 && nfts.length > collection.length ? (
          <div className='text-center my-5'>
            <button  className="shadow-lg shadow-black text-white text-sm font-bold bg-[#13533e] hover:bg-[#15806c] cursor-pointer rounded-lg py-2 px-5"
              onClick={() => setEnd(end + count)}>
                Xem thêm
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

const Card = ({ nft }) => {
  const setNFT = () => {
    setGlobalState('nft', nft)
    setGlobalState('showModal', 'scale-100')
  }
  
  return (
    <div className='w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3
                  hover:scale-105 transition-transform duration-300'>
      <img className='h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3'
        src={nft.metadataURI} 
        alt={nft.title} />

      <h4 className='text-white font-semibold'>
        {nft.title}
      </h4>

      <p className='text-gray-400 text-sm my-1'>
        {truncate(nft.description, 120, 0, 123)}
      </p>

      <div className='flex justify-between items-center mt-3 text-white'>
        <div className="flex flex-col">
          <small className='text-xs'>Giá tiền</small>
          <p className='text-sm font-semibold'>{nft.cost} ETH</p>
        </div>

        {/*Xem chi tiết sản phẩm*/}
        <button  className="shadow-lg shadow-black text-white text-sm bg-[#13533e] hover:bg-[#15806c] cursor-pointer rounded-full py-2 px-3"
            onClick={setNFT}>
          Xem chi tiết
        </button>
      </div>

    </div>
  )
}

export default Products