// src/components/Feature.jsx
import React from "react";
import { FiShield, FiZap, FiUsers, FiTrendingUp, FiGlobe, FiLock } from "react-icons/fi";

const FEATURES = [
  {
    id: 1,
    icon: <FiShield className="text-3xl mb-3" />,
    title: "Bảo chứng bằng Blockchain",
    desc: "Mỗi tác phẩm được mint thành NFT, ghi nhận trên blockchain giúp hạn chế sao chép, xác thực nguồn gốc rõ ràng.",
  },
  {
    id: 2,
    icon: <FiZap className="text-3xl mb-3" />,
    title: "Giao dịch tức thì",
    desc: "Mua bán, chuyển nhượng NFT chỉ trong vài bước, trạng thái giao dịch được cập nhật gần như ngay lập tức.",
  },
  {
    id: 3,
    icon: <FiUsers className="text-3xl mb-3" />,
    title: "Kết nối tác giả & người sưu tầm",
    desc: "Tác giả dễ dàng giới thiệu tác phẩm, người sưu tầm tìm được những NFT phù hợp với gu thẩm mỹ.",
  },
  {
    id: 4,
    icon: <FiTrendingUp className="text-3xl mb-3" />,
    title: "Theo dõi giá & lịch sử giao dịch",
    desc: "Dễ dàng xem lại lịch sử mua bán và biến động giá của từng NFT, hỗ trợ quyết định đầu tư.",
  },
  {
    id: 5,
    icon: <FiGlobe className="text-3xl mb-3" />,
    title: "Tiếp cận người dùng toàn cầu",
    desc: "Không giới hạn biên giới, bất kỳ ai có ví crypto đều có thể tham gia giao dịch tác phẩm.",
  },
  {
    id: 6,
    icon: <FiLock className="text-3xl mb-3" />,
    title: "Quyền sở hữu minh bạch",
    desc: "Địa chỉ ví sở hữu được hiển thị công khai, giúp tăng độ tin cậy và uy tín cho bộ sưu tập.",
  },
];

const Feature = () => {
  return (
    <div className="gradient-bg-products min-h-screen">
      <div className="w-4/5 py-10 mx-auto">
        {/* Tiêu đề */}
        <div className="mb-8">
          <h4 className="text-white text-3xl md:text-4xl font-bold uppercase text-gradient">
            Tính năng nổi bật
          </h4>
          <p className="text-gray-300 mt-3 max-w-2xl text-sm md:text-base">
            Nền tảng H.Q.N NFT được xây dựng để đơn giản hóa trải nghiệm mint, mua bán
            và sưu tầm các tác phẩm nghệ thuật số, tận dụng sức mạnh của công nghệ blockchain.
          </p>
        </div>

        {/* Grid Tính năng */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
          {FEATURES.map((item) => (
            <div
              key={item.id}
              className="w-full h-full bg-gray-800/80 backdrop-blur rounded-xl shadow-xl shadow-black
                         border border-green-500/40 p-5 text-white
                         hover:scale-105 hover:border-green-700 transition-transform duration-300"
            >
              <div className="text-green-600">{item.icon}</div>
              <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Section “Tại sao chọn…” */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h5 className="text-white text-2xl font-bold mb-3">
              Tại sao nên chọn H.Q.N NFT?
            </h5>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Không chỉ dừng lại ở việc trưng bày tác phẩm, nền tảng còn giúp bạn{" "}
              <span className="text-green-600 font-semibold">
                quản lý, theo dõi và tối ưu giá trị bộ sưu tập NFT
              </span>{" "}
              theo thời gian. Tính năng được thiết kế hướng tới trải nghiệm đơn giản, rõ ràng
              cho cả người mới lẫn người đã quen với crypto.
            </p>
          </div>

          <div className="bg-[#151c25] rounded-xl border border-green-500/40 p-5 shadow-xl shadow-black">
            <h6 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Trải nghiệm bạn nhận được
            </h6>
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
              <li>Giao diện trực quan, dễ thao tác kể cả với người mới.</li>
              <li>Tích hợp ví crypto để giao dịch trực tiếp NFT trên nền tảng.</li>
              <li>Thông tin giao dịch được hiển thị rõ ràng, minh bạch.</li>
              <li>Dễ dàng mở rộng thêm tính năng mới trong tương lai (staking, đấu giá,…).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
