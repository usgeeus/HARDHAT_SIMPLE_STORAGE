const { task } = require("hardhat/config")
require("hardhat-gas-reporter")
require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block-number")
require("solidity-coverage")
//  yarn hardhat coverage

/** @type import('hardhat/config').HardhatUserConfig */

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners()

    for (const account of accounts) {
        console.log(account.address)
    }
})

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || ""
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        goerli: { url: GOERLI_RPC_URL, accounts: [PRIVATE_KEY], chainId: 5 },
        /**yarn hardhat node는 defaultNetwork hardhat과 다른 환경임 */
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
        //chainlist gorli 참고
    },
    solidity: "0.8.17",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        //test시
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
}

//yarn add --dev dotenv
//yarn add --dev @nomiclabs/hardhat-etherscan
//rekt news에는 스마트컨트랙트 해킹된 사건들에 대해서 다룸.
