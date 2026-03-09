## Digital Hero NFT – Avalanche Build Games MVP

This repository contains the minimal smart contract implementation for the **Digital Hero NFT** MVP, created as a submission for **Avalanche Build Games 2026**.

- **Network**: Avalanche (intended for deployment on an Avalanche-compatible network)
- **Contract**: `DigitalHeroNFT.sol` – an ERC-721 NFT that mints "Digital Hero" tokens in exchange for a configured ERC-20 token (HON).
- **Purpose**: Demonstrate the core minting and payment flow for the Digital Hero upgrade experience as part of the Build Games competition.

### End-to-end MVP flow

1. **In-game action**: The player clicks “convert to NFT” on the game screen.
2. **Web app opens**: The game redirects the player to the web app URL above.
3. **Authentication**: The player signs in using **Particle Auth**.
4. **List owned heroes**: The app fetches and displays the player’s **Digital Heroes**.
5. **Select hero to upgrade**: The player chooses one Digital Hero and clicks **“upgrade to NFT”**.
6. **Payment prompt**: A **Particle Wallet** transaction prompt appears and the player pays the required **HON**.
7. **NFT minting**: A new **Digital Hero NFT** is minted on-chain, a receipt is shown, and the app links to the transaction on **testnet.snowtrace** so the player can verify it on the Avalanche testnet explorer.

For more information about the competition, see the official Avalanche Builder Hub page:  
`https://build.avax.network/build-games`

> Note: This codebase is an MVP prototype for hackathon/judging purposes and is **not** security-audited. Do not use in production without proper review.

