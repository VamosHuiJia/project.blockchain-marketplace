import React from 'react'
import Identicon from 'react-identicons' 
import HeroArt from '../assets/HeroArt.jpg'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-10'>
        <div className='md:w-3/6 w-full'>
            <div>
              <h1 className='text-white text-4xl font-bold'>
                Trang trao đổi & mua bán 
                các tác phẩm nghệ thuật 
              </h1>

              <h2 className='text-white text-4xl mt-5 font-bold text-gradient'>
                Giao dịch bằng NFT 
              </h2>

              <p className='text-gray-300 font-semibold text-sm mt-3'>
                Trao đổi và sở hữu cho mình những NFT đang gây sốt nhất!</p>
            </div>

            <div>
              <button className='shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] font-semibold rounded-full cursor-pointer py-3 px-5 mt-3'>
                Tạo NFT
              </button>
            </div>

            <div className='w-3/4 flex justify-between items-center my-5'>
              <div>
                <p className='text-white font-bold'>123k</p>
                <small className='text-gray-300'>lượt truy cập</small>
              </div>

              <div>
                <p className='text-white font-bold'>400</p>
                <small className='text-gray-300'>tác phẩm</small>
              </div>

              <div>
                <p className='text-white font-bold'>57</p>
                <small className='text-gray-300'>tác giả</small>
              </div>
            </div>
        </div>

        <div className="shadow-xl shadow-black md:w-2/5 w-full mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800">
          <img
            src={HeroArt}
            alt='Hero'
            className="h-60 w-full object-cover"
          />
        <div className="flex justify-start items-center p-3">
          <Identicon className="h-10 w-10 object-contain rounded-full mr-3"
          string={'0x21...786a'} 
          size={50} />
          <div>
            <div>
              <p className="text-white font-semibold">
                Kết nối tới tài khoản của bạn
              </p>
            </div>
            
            <small className="text-pink-800 font-bold">@you</small>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero