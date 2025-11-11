import React from 'react'

import Author1 from '../assets/Images/Tac_gia/VTP.jpg'   // Vũ Trọng Phụng
import Author2 from '../assets/Images/Tac_gia/TL.jpeg'   // Thạch Lam
import Author3 from '../assets/Images/Tac_gia/NC.jpg'   // Nam Cao
import Author4 from '../assets/Images/Tac_gia/KH.jpg'   // Khái Hưng
import Author5 from '../assets/Images/Tac_gia/HNP.jpg'   // Hoàng Ngọc Phách
import Author6 from '../assets/Images/Tac_gia/NgoTatTo.jpg'   // Ngô Tất Tố
import Author7 from '../assets/Images/Tac_gia/NCH.jpg'   // Nguyễn Công Hoan
import Author8 from '../assets/Images/Tac_gia/ToHoai.jpg'   // Tô Hoài

const AUTHORS = [
  {
    id: 1,
    name: 'Vũ Trọng Phụng',
    born: '1912 – 1939',
    desc: 'Nhà văn hiện thực xuất sắc, tác giả của Số đỏ, Giông tố...',
    img: Author1,
  },
  {
    id: 2,
    name: 'Thạch Lam',
    born: '1910 – 1942',
    desc: 'Nhà văn trữ tình nổi tiếng với Gió đầu mùa, Hai đứa trẻ...',
    img: Author2,
  },
  {
    id: 3,
    name: 'Nam Cao',
    born: '1917 – 1951',
    desc: 'Nhà văn hiện thực phê phán, tác giả Chí Phèo, Lão Hạc...',
    img: Author3,
  },
  {
    id: 4,
    name: 'Khái Hưng',
    born: '1896 – 1947',
    desc: 'Nhà văn Tự Lực Văn Đoàn, nổi tiếng với Hồn bướm mơ tiên...',
    img: Author4,
  },
  {
    id: 5,
    name: 'Hoàng Ngọc Phách',
    born: '1896 – 1973',
    desc: 'Tác giả của tiểu thuyết Tố Tâm, mở đầu cho văn học lãng mạn Việt Nam.',
    img: Author5,
  },
  {
    id: 6,
    name: 'Ngô Tất Tố',
    born: '1893 – 1954',
    desc: 'Nhà văn hiện thực phê phán, tác giả nổi tiếng của Tắt đèn.',
    img: Author6,
  },
  {
    id: 7,
    name: 'Nguyễn Công Hoan',
    born: '1903 – 1977',
    desc: 'Nhà văn hiện thực, tiêu biểu với Kép Tư Bền và Bước đường cùng.',
    img: Author7,
  },
  {
    id: 8,
    name: 'Tô Hoài',
    born: '1920 – 2014',
    desc: 'Nhà văn nổi tiếng với Dế Mèn phiêu lưu ký và nhiều truyện thiếu nhi.',
    img: Author8,
  },
]

const Author = () => {
  return (
    <div className="gradient-bg-products">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">
          Các tác giả nổi tiếng
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
          {AUTHORS.map((author) => (
            <Card key={author.id} author={author} />
          ))}
        </div>

        {/* <div className="text-center my-5">
          <button
            className="shadow-lg shadow-black text-white text-sm font-bold bg-[#f7005f] hover:bg-[#bd255f] cursor-pointer rounded-lg py-2 px-5"
            type="button"
          >
            Xem thêm
          </button>
        </div> */}
      </div>
    </div>
  )
}

const Card = ({ author }) => {
  return (
    <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3 hover:scale-105 transition-transform duration-300">
      <img
        className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
        src={author.img}
        alt={author.name}
        loading="lazy"
      />
      <h4 className="text-white font-semibold text-lg">{author.name}</h4>
      <p className="text-gray-400 text-sm italic">{author.born}</p>
      <p className="text-gray-300 text-sm mt-2 line-clamp-2">{author.desc}</p>
    </div>
  )
}

export default Author
