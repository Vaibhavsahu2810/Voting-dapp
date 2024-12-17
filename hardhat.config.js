const { network } = require("hardhat");

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat:{
      chainId: 1337,
    },
  },
};
