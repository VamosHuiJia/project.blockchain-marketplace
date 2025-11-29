// truffle-config.js
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },

    sepolia: {
      provider: () =>
        new HDWalletProvider(
          // CHÚ Ý: truyền private key dưới dạng MẢNG, KHÔNG '0x'
          ["0e8c17fd52b0feb42bc612cf06552a8d3c0f27c043c7fd8ffb93947d23c1e6c2"],
          // RPC Sepolia Infura của bạn
          "https://sepolia.infura.io/v3/bced3640bb0e43f3a21d71e419577cae"
        ),
      network_id: 11155111,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",

  compilers: {
    solc: {
      version: "0.8.11",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
