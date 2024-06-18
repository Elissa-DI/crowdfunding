const {ethers} = require("hardhat");

const main = async() => {

  const [deployer] =  await ethers.getSigners();

  const Crowdfunding = await ethers.getContractFactory("Crowdfunding");
  const crowdfunding = await Crowdfunding.deploy();

  console.log("Deploying Crowdfunding contract...");

  // await crowdfunding.deployed();

  console.log("Crowdfunding contract deployed to:", crowdfunding.target);
  console.log("Crowdfunding contract deployed by address:", deployer.address);
}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch(err) {
    console.log(err);
    process.exit(1);
  }
}

runMain();