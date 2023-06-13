/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    // hardhat: {
    //   url: "http://localhost:8545", // Hardhat 
    //   accounts: {
    //     mnemonic: "your mnemonic here", // Mnemonic for generating private keys
    //   },
    // },
    
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/JVV5lbJr914-fvrTV_K4dnDRwydjqDJX",
      accounts: ["4dda8701b42e288dc8fc46ccf332854e279bb60a55be3e98fc413fb86cb58170",], // Replace with your own private key(s) for deploying contracts
      chainId : 11155111,
    },
    // localhost: {
    //   url: "http://localhost:8545",
    //   chainId: 31337,
    // },
  },
};