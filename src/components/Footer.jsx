// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import Footerlogo from "../assets/H.Q.N_logo.png";

const Footer = () => {
  return (
    <footer className="w-full gradient-bg-footer text-white py-10 border-t border-green-500/20">
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={Footerlogo} alt="logo" className="w-40 mb-3 opacity-90" />
          <p className="text-gray-300 text-sm leading-relaxed">
            Nền tảng giao dịch & sưu tầm tác phẩm nghệ thuật bằng NFT,
            đảm bảo minh bạch – an toàn – độc quyền cho người dùng Web3.
          </p>
        </div>


        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold mb-3 text-gradient">Danh mục</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-green-600 transition">
              <Link to="/products">Sản phẩm</Link>
            </li>
            <li className="hover:text-green-600 transition">
              <Link to="/authors">Tác giả</Link>
            </li>
            <li className="hover:text-green-600 transition">
              <Link to="/features">Tính năng</Link>
            </li>
            <li className="hover:text-green-600 transition">
              <Link to="/community">Cộng đồng</Link>
            </li>
          </ul>
        </div>


        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-2xl font-semibold mb-3 text-gradient">Hỗ trợ</h3>
          <p className="text-gray-300 text-sm">
            Email: <span className="text-green-600">support@hqnft.com</span>
          </p>
          <p className="text-gray-300 text-sm mt-1">
            Hotline: <span className="text-green-600">0123 456 789</span>
          </p>

          <p className="text-xs text-gray-400 mt-4 opacity-80">
            © 2025 H.Q.N NFT — All rights reserved.
          </p>
        </div>
      </div>


      <div className="border-t border-green-500/20 mt-10 pt-4">
        <p className="text-center text-gray-400 text-xs opacity-70">
          Made with ❤️ by H.Q.N Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
