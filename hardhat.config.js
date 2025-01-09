require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY", // Substitua com sua URL RPC
      accounts: ["YOUR_WALLET_PRIVATE_KEY"], // Substitua com a chave privada da sua carteira
    },
  },
};
