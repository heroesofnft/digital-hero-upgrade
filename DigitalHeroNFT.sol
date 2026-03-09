// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DigitalHeroNFT is ERC721, Ownable {
    IERC20 public immutable honToken;
    uint256 public mintPrice;
    uint256 public nextTokenId = 16874;

    event HeroMinted(address indexed to, uint256 indexed tokenId);

    constructor(
        address _honToken,
        uint256 _mintPrice
    ) ERC721("Heroes Nft", "HRO") Ownable(msg.sender) {
        honToken = IERC20(_honToken);
        mintPrice = _mintPrice;
    }

    function mint() external returns (uint256) {
        require(
            honToken.transferFrom(msg.sender, address(this), mintPrice),
            "HON transfer failed"
        );

        uint256 tokenId = nextTokenId++;
        _safeMint(msg.sender, tokenId);

        emit HeroMinted(msg.sender, tokenId);
        return tokenId;
    }

    function setMintPrice(uint256 _mintPrice) external onlyOwner {
        mintPrice = _mintPrice;
    }

    function withdraw() external onlyOwner {
        uint256 balance = honToken.balanceOf(address(this));
        require(balance > 0, "No HON to withdraw");
        require(honToken.transfer(owner(), balance), "Transfer failed");
    }
}
