// src/components/Community.jsx
import React from "react";
import {
  FiUsers,
  FiMessageCircle,
  FiGithub,
  FiHeart,
  FiAward,
  FiArrowRight,
} from "react-icons/fi";

const Community = () => {
  return (
    <div className="gradient-bg-products min-h-screen">
      <div className="w-4/5 py-10 mx-auto text-white">
        {/* Hero */}
        <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-3xl md:text-4xl font-bold uppercase text-gradient">
              Cộng đồng H.Q.N NFT
            </h4>
            <p className="text-gray-300 mt-3 text-sm md:text-base">
              Nơi kết nối những người yêu nghệ thuật số, nhà sưu tầm NFT và các tác giả Việt.
              Tại đây, bạn có thể chia sẻ bộ sưu tập, thảo luận xu hướng mới và học hỏi kinh nghiệm
              đầu tư NFT an toàn.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-5">
              <a
                href="#"
                className="inline-flex items-center shadow-xl shadow-black bg-[#e32970]
                           hover:bg-[#bd255f] rounded-full px-6 py-2 text-sm font-semibold"
              >
                Tham gia Discord
                <FiArrowRight className="ml-2" />
              </a>
              <a
                href="#"
                className="inline-flex items-center text-sm text-gray-300 hover:text-pink-400"
              >
                <FiGithub className="mr-2" />
                Xem source code & tài liệu
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#151c25] border border-pink-500/40 rounded-xl p-4 shadow-xl shadow-black">
              <p className="text-2xl font-bold">1.2k+</p>
              <p className="text-gray-300 text-sm mt-1">Thành viên cộng đồng</p>
            </div>
            <div className="bg-[#151c25] border border-pink-500/40 rounded-xl p-4 shadow-xl shadow-black">
              <p className="text-2xl font-bold">300+</p>
              <p className="text-gray-300 text-sm mt-1">NFT được chia sẻ</p>
            </div>
            <div className="bg-[#151c25] border border-pink-500/40 rounded-xl p-4 shadow-xl shadow-black">
              <p className="text-2xl font-bold">50+</p>
              <p className="text-gray-300 text-sm mt-1">Tác giả đang hoạt động</p>
            </div>
            <div className="bg-[#151c25] border border-pink-500/40 rounded-xl p-4 shadow-xl shadow-black">
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-gray-300 text-sm mt-1">Kênh thảo luận & hỗ trợ</p>
            </div>
          </div>
        </section>

        {/* Hoạt động cộng đồng */}
        <section className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/80 rounded-xl border border-pink-500/40 p-5 shadow-xl shadow-black">
            <FiUsers className="text-3xl text-pink-500 mb-3" />
            <h5 className="text-lg font-semibold mb-2">Kết nối & networking</h5>
            <p className="text-sm text-gray-300 leading-relaxed">
              Gặp gỡ những người cùng đam mê, trao đổi bộ sưu tập, hợp tác ra mắt bộ NFT mới, 
              hoặc đơn giản là tìm người đồng hành trong hành trình Web3.
            </p>
          </div>

          <div className="bg-gray-800/80 rounded-xl border border-pink-500/40 p-5 shadow-xl shadow-black">
            <FiMessageCircle className="text-3xl text-pink-500 mb-3" />
            <h5 className="text-lg font-semibold mb-2">Thảo luận & chia sẻ</h5>
            <p className="text-sm text-gray-300 leading-relaxed">
              Cùng phân tích xu hướng NFT, chia sẻ kinh nghiệm tránh scam, học cách bảo mật ví
              và tối ưu chi phí gas khi giao dịch.
            </p>
          </div>

          <div className="bg-gray-800/80 rounded-xl border border-pink-500/40 p-5 shadow-xl shadow-black">
            <FiAward className="text-3xl text-pink-500 mb-3" />
            <h5 className="text-lg font-semibold mb-2">Sự kiện & vinh danh</h5>
            <p className="text-sm text-gray-300 leading-relaxed">
              Tổ chức mini game, contest vẽ, ra mắt bộ sưu tập mới và vinh danh những tác giả,
              nhà sưu tầm có đóng góp nổi bật cho cộng đồng.
            </p>
          </div>
        </section>

        {/* Góc dành cho người mới */}
        <section className="mt-10 bg-[#151c25] border border-pink-500/40 rounded-xl p-6 shadow-xl shadow-black">
          <div className="flex items-center mb-3">
            <FiHeart className="text-pink-500 text-2xl mr-2" />
            <h5 className="text-lg md:text-xl font-semibold">
              Mới bắt đầu với NFT? Cộng đồng sẽ hỗ trợ bạn!
            </h5>
          </div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Nếu bạn là người mới, đừng ngại đặt câu hỏi. Cộng đồng H.Q.N luôn khuyến khích tinh
            thần học hỏi, tôn trọng lẫn nhau và nói không với FOMO, pump & dump thiếu lành mạnh.
          </p>

          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
            <li>• Hướng dẫn tạo ví, kết nối ví với nền tảng.</li>
            <li>• Giải thích khái niệm cơ bản: NFT, gas fee, smart contract…</li>
            <li>• Gợi ý tài liệu, khóa học cơ bản về Web3 & blockchain.</li>
            <li>• Chia sẻ kinh nghiệm thực tế từ người đi trước.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Community;
