import React from 'react'

const Transactions = () => {
  return (
    <div className='bg-[#151c25]'>
      <div className='w-4/5 py-10 mx-auto'>
        <h4 className='text-white text-3xl font-bold uppercase text-gradient'>
          Giao dịch gần nhất
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
          {Array(3).fill().map((nft, i) => (
            <Transaction key={i} tx={i} />
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

const Transaction = ({ tx }) => (
  <div className='flex justify-between items-center border border-pink-500 text-gray-400 w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3'>
    Giao dich
  </div>
)

export default Transactions