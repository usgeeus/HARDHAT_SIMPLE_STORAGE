const { ethers, run, network } = require("hardhat")
//run은 hardhattask를 run해줌
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying contract...")
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.deployed()
    console.log(`Deployed contract to: ${simpleStorage.address}`)
    // hardhat에 배포한다면 verify 안함
    if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations")
        await simpleStorage.deployTransaction.wait(6)
        await verify(simpleStorage.address, [])
    }

    const currentValue = await simpleStorage.retrieve()
    console.log(`current value is : ${currentValue}`)
    const transactionResponse = await simpleStorage.store(7)
    await transactionResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log(`updated value is : ${updatedValue}`)
}
//args는 constructor의 arguments
async function verify(contractAddress, args) {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            /**actual arguments */ address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
//yarn hardhat run scripts/deploy.js
//yarn hardhat run scripts/deploy.js --network hardhat
//yarn add --dev @nomiclabs/hardhat-etherscan
//yarn hardhat clean => delete artifacts and clean cache
//yarn hardhat console --network localhost 을통해서 콘솔로 yarn hardhat node 환경에서 interact할수있음.
