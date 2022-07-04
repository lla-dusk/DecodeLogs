import Web3 from "web3";

let web3;

const provider = new Web3.providers.HttpProvider(
  "https://polygon-mumbai.g.alchemy.com/v2/WWvtjuEXcDbNHpx1f65J2dF3PP8JhVwN" // `https://eth-kovan.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_API_KEY}`
  // `https://polygon-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_API_KEY}`
);
web3 = new Web3(provider);

export default web3;
