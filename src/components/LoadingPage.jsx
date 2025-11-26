import React from 'react'
import { useGlobalState } from '../store'

const LoadingPage = () => {
    const [loadingPage] = useGlobalState('loadingPage')

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black 
      bg-opacity-50 transform transition-transform duration-300 
      ${loadingPage.show ? 'scale-100' : 'scale-0'}`}>
        <div className='bg-[#151c25] shadow-xl shadow-[#13533e] 
                        rounded-xl px-10 pb-2'>
            <div className='flex flex-col text-white'>
                <div className='flex justify-center items-center'>
                    <div className='lds-dual-ring scale-50'></div>
                    <p className='text-lg'>Vui lòng chờ</p>
                </div>
                <small className='text-center'>{loadingPage.msg}</small>
            </div>
        </div>
    </div>
  )
}

export default LoadingPage