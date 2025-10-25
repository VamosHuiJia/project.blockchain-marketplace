import React from 'react'
import Footerlogo from '../assets/H.Q.N_logo.png'

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
            <div className="flex flex-[0.25] justify-center items-center">
                <img src={Footerlogo} alt="logo" className="w-32" />
            </div>

            <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                <p className="text-white text-base text-center mx-2 cursor-pointer">
                Sản phẩm
                </p>
                <p className="text-white text-base text-center mx-2 cursor-pointer">
                Tác giả
                </p>
                <p className="text-white text-base text-center mx-2 cursor-pointer">
                Tính năng
                </p>
                <p className="text-white text-base text-center mx-2 cursor-pointer">
                Cộng đồng
                </p>
            </div>

            <div className="flex flex-[0.25] justify-center items-center">
                <p className="text-white text-right text-xs">
                &copy;2025 All rights reserved
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer