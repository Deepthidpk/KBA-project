require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {}
  },
  solidity: "0.8.26",
};