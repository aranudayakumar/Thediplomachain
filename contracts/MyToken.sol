// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
contract MyToken is ERC721Enumerable, Ownable {
    using SafeMath for uint256;

    uint256 private _currentTokenId = 0;

    constructor() ERC721("MyToken", "MTKN") {}

    function mint() public {
    require(_msgSender() != address(0), "Minting address cannot be zero address");

    _currentTokenId = _currentTokenId.add(1);
    _mint(_msgSender(), _currentTokenId);
}


    function getCurrentTokenId() external view returns (uint256) {
        return _currentTokenId;
    }
}
