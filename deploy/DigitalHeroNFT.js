module.exports = async function ({ ethers, getNamedAccounts, deployments, getChainId }) {
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  // Read constructor parameters from environment variables for flexibility
  const honToken = process.env.HON_TOKEN_ADDRESS;
  const mintPrice = process.env.MINT_PRICE_WEI;

  if (!honToken || !mintPrice) {
    throw new Error(
      "Missing HON_TOKEN_ADDRESS or MINT_PRICE_WEI in environment variables"
    );
  }

  const contract = await deploy("DigitalHeroNFT", {
    from: deployer,
    args: [honToken, mintPrice],
    log: true,
    deterministicDeployment: false,
  });

  console.log("Network:", chainId);
  console.log("DigitalHeroNFT deployed to:", contract.address);
};

module.exports.tags = ["DigitalHeroNFT"];

