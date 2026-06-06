# 🖼️ Blockchain Art Marketplace

Nền tảng giao dịch nghệ thuật kỹ thuật số phi tập trung (DApp) - Nơi các nghệ sĩ đúc (mint) và người sưu tầm giao dịch NFT một cách an toàn và minh bạch.

![Status](https://img.shields.io/badge/status-active-success)
![React](https://img.shields.io/badge/react-v17.0+-blue)
![Solidity](https://img.shields.io/badge/solidity-v0.8+-lightgrey)
![Web3.js](https://img.shields.io/badge/web3.js-v1.7+-orange)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-v3.0+-blueviolet)

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v14+ hoặc v16+
- [npm](https://www.npmjs.com/) v7+
- [Truffle](https://trufflesuite.com/) (`npm install -g truffle`)
- [Ganache](https://trufflesuite.com/ganache/) (Cho local blockchain network)
- Extension ví **MetaMask** trên trình duyệt

### Installation

```bash
# 1. Clone repository
git clone https://github.com/your-username/blockchain-art-marketplace.git
cd blockchain-art-marketplace

# 2. Install dependencies
npm install

# 3. Khởi động mạng blockchain local (Nếu dùng Ganache)
# Mở ứng dụng Ganache hoặc chạy ganache-cli ở port 7545

# 4. Deploy Smart Contracts lên local network
truffle migrate --reset

# 5. Start development server
npm start
```

Dự án khởi động tại: `http://localhost:3000`
Hoặc có thể truy cập link: `https://blockchain-marketplace-ver1-a3ex6a5ek-vamoshuijias-projects.vercel.app/`

---

## 📋 Tech Stack

| Technology | Version | Purpose |
| --- | --- | --- |
| **React.js** | v17.0+ | Frontend UI Library |
| **Tailwind CSS** | v3.0+ | Styling & UI components |
| **Web3.js** | v1.7+ | Tương tác với Ethereum blockchain |
| **Solidity** | ^0.8.0 | Viết Smart Contracts |
| **Truffle** | v5+ | Development framework cho Ethereum |
| **IPFS / NFT.Storage** | ^7.2.0 | Lưu trữ phi tập trung hình ảnh và metadata |
| **OpenZeppelin** | v4.5+ | Tiêu chuẩn bảo mật cho Smart Contracts (ERC-721) |

---

## 📁 Project Structure

```text
blockchain-art-marketplace/
├── public/                 # Static assets
├── src/                    # Frontend React source code
│   ├── components/         # Reusable UI components
│   ├── contracts/          # Smart contract ABI json files (tự sinh ra sau migrate)
│   ├── store/              # Global state management
│   ├── App.js              # Main application component
│   └── index.js            # Entry point
├── contracts/              # Solidity Smart Contracts (.sol)
├── migrations/             # Truffle deployment scripts
├── test/                   # Smart contracts tests
├── .env                    # Environment variables
├── package.json            # Node.js dependencies
├── tailwind.config.js      # TailwindCSS configuration
└── truffle-config.js       # Truffle & Network configuration
```

---

## 🏗️ Architecture

Kiến trúc DApp hoạt động theo luồng:

```text
User (MetaMask)
    ↓
Frontend (React.js + Web3.js)
    ↓
Smart Contract (Solidity / EVM)
    ↓
IPFS (Lưu trữ Metadata & Image)
```

---

## ✨ Features

1. **Mint NFT**: Nghệ sĩ có thể tải tác phẩm lên, dữ liệu sẽ được tự động lưu trữ phi tập trung qua IPFS, và tạo ra một NFT mới (tiêu chuẩn ERC-721) trên blockchain.
2. **Marketplace (Thị trường)**: Hiển thị các NFT đang được niêm yết bán trên sàn giao dịch.
3. **Giao dịch Mua/Bán**: Người dùng có thể kết nối ví MetaMask để mua/bán các NFT bằng đồng coin của mạng (VD: ETH).
4. **Dashboard**: Quản lý bộ sưu tập cá nhân, theo dõi các NFT đã tạo hoặc đang sở hữu.

---

## 🔌 Smart Contract & Network Integration

Smart Contract chính của dự án kế thừa tiêu chuẩn **ERC-721** (Non-Fungible Token Standard) từ thư viện bảo mật **OpenZeppelin**.

Để deploy lên Testnet (Sepolia/Goerli) hoặc Mainnet, hãy cấu hình `truffle-config.js` và cập nhật thông tin trong file `.env`:

```env
MNEMONIC="your metamask seed phrase here..."
INFURA_URL="https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID"
```

Sau đó chạy lệnh migrate với network tương ứng:
```bash
truffle migrate --network sepolia
```

---

## 🚦 Current Status

- ✅ Smart contract development (ERC-721)
- ✅ IPFS Integration (Metadata & Images qua NFT.Storage)
- ✅ Frontend React Components
- ✅ Web3.js Wallet Integration
- 🔄 Nâng cấp UI/UX (Đang tiến hành)
- 📋 Hỗ trợ đa chuỗi (Multi-chain - Dự kiến)

---

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add new feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Open a Pull Request

---

## 📞 Support

Nếu có vấn đề trong quá trình setup:
1. Đảm bảo RPC URL và Network ID của Ganache/Testnet khớp với `truffle-config.js` và ví MetaMask.
2. Đảm bảo tài khoản ví đã được cấp faucet (test ETH) để làm phí gas.
3. Xóa cache trình duyệt và reset account trên MetaMask nếu gặp lỗi `nonce too high`.

---

## 📄 License

Dự án này được phân phối dưới giấy phép **MIT License**.

---

**Happy Minting! 🎨🚀**
