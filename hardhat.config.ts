import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "dotenv/config";

import { HardhatUserConfig } from "hardhat/types";

const accounts: string[] = [process.env.DEPLOYER_PRIVATE_KEY || ""];

const config: HardhatUserConfig = {
  namedAccounts: {
    deployer: { default: 0 },
  },

  networks: {
    localhost: {
      live: false,
      saveDeployments: true,
      allowUnlimitedContractSize: true,
      gas: 2100000,
      gasPrice: 470000000000,
      tags: ["local"],
    },
    hardhat: {
      gas: 2100000,
      gasPrice: 470000000000,
      chainId: 43112,
      allowUnlimitedContractSize: true,
    },
    avash: {
      url: "http://localhost:9650/ext/bc/C/rpc",
      gasPrice: 470000000000,
      chainId: 43112,
      accounts: [],
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: accounts,
      chainId: 43113,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
      gasPrice: 470000000000,
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: accounts,
      chainId: 43114,
      live: true,
      saveDeployments: true,
      gasPrice: 470000000000,
    },
  },
  paths: {
    artifacts: "artifacts",
    cache: "cache",
    deploy: "deploy",
    deployments: "deployments",
    imports: "imports",
    sources: "contracts",
    tests: "test",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};

export default config;
