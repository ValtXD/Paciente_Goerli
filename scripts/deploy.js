async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with account:", deployer.address);

    const TokenContract = await ethers.getContractFactory("TokenContract");
    const token = await TokenContract.deploy();

    console.log("Token Contract deployed to:", token.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
