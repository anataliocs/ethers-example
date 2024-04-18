import { ethers } from "ethers";

module.exports = (async function () {

// If you don't specify a //url//, Ethers connects to the default 
// (i.e. ``http:/\/localhost:8545``)
const provider = new ethers.JsonRpcProvider("https://ethereum-rpc.publicnode.com");

const blockNumber = await provider.getBlockNumber();

console.log("Current block number: " + blockNumber);

})();