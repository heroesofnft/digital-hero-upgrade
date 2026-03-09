module.exports = async function ({ ethers, getNamedAccounts, deployments }) {
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  // Deploy the Old Heroes Token Token Contract
  const token = await deploy("ERC721Mock", {
    from: deployer,
    args: [],
    libraries: {},
    log: true,
    deterministicDeployment: false,
  });

  console.log("connected to", hre.network.name);
  console.log("ERC721Mock is deployed to", token.address);
};

module.exports.tags = ["ERC721Mock"];
