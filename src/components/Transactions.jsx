import { useEffect, useState } from 'react'
import { BiTransfer } from 'react-icons/bi'
import { MdOpenInNew } from 'react-icons/md'

import { useGlobalState, truncate } from '../store'

const Transactions = () => {
  const [transactions] = useGlobalState('transactions')

  // Định dạng hiển thị -> Xem thêm
  const [end, setEnd] = useState(3)
  const [count] = useState(3)
  const [collection, setCollection] = useState([])

  const getCollection = () => {
    return transactions.slice(0, end)
  }

  useEffect(() => {
    setCollection(getCollection())
  }, [transactions, end])

  return (
    <div className='bg-[#151c25]'>
      <div className='w-4/5 py-10 mx-auto'>
        <h4 className='text-white text-3xl font-bold uppercase text-gradient'>
          {collection.length > 0 ? 'Giao dịch gần đây' : 'Không có giao dịch '}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-3 py-2.5">
          {transactions.map((tx, i) => (
            <Transaction key={i} tx={tx} />
          ))}
        </div>

        {collection.length > 0 && transactions.length > collection.length ? (
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

const Transaction = ({ tx }) => (
  <div className='flex justify-between items-center border border-green-700 text-gray-400 w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3'>
    <div className='rounded-md shadow-sm shadow-green-600 p-2 '>
      <BiTransfer />
    </div>

    <div className='px-3 whitespace-nowrap'>
      <h4 className='text-sm '>
        Giao dịch đã thực hiện
      </h4>
      <small className='flex justify-start items-center'>
        <span className='mr-1'>Người nhận </span>
        <a className='text-green-700 mr-2' href='#' target='_blank'>
          {truncate(tx.owner, 4, 4, 11)}
        </a>
        <MdOpenInNew />
      </small>
    </div>

    <p className='text-sm font-medium '>
      {tx.cost} ETH
    </p>
  </div>
)

export default Transactions