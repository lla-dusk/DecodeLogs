const axios = require("axios");
const Web3 = require("web3");
const web3 = new Web3();

const decodeLogAPI = async () => {
  const url =
    "https://api.polygonscan.com/api?module=logs&action=getLogs&fromBlock=30323943&toBlock=30323944&address=0xE3A161EdD679fC5ce2dB2316a4B6f7ab33a8eD6A&topic0=0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62&apikey=TJA1U28PDEZQ2IVKYQI4B51GT9HXX7W64I";

  const { data } = await axios.get(url);

  console.log("Data: " + JSON.stringify(data.result[0]));

  const inputs = [
    {
      name: "_operator",
      type: "address",
      indexed: true,
    },
    {
      name: "_from",
      type: "address",
      indexed: true,
    },
    {
      name: "_to",
      type: "address",
      indexed: true,
    },
    {
      name: "_id",
      type: "uint256",
      indexed: false,
    },
    {
      name: "_amount",
      type: "uint256",
      indexed: false,
    },
  ];

  const hexString = data.result[0].data;
  const retTopics = data.result[0].topics;

  let topics = [];

  retTopics.map((topic, index) => {
    if (index > 0) topics.push(topic);
  });

  console.log("hexString: ", JSON.stringify(hexString));
  console.log("topics: ", JSON.stringify(retTopics));

  const result = web3.eth.abi.decodeLog(inputs, hexString, topics);
  console.log("message: ", result._message);

  console.log("Results: " + JSON.stringify(result._id));
};

decodeLogAPI();
