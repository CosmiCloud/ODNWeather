require("dotenv").config();
const ethers = require("ethers");
const DKG = require("dkg.js");
const dkg = new DKG({
  endpoint: "http://127.0.0.1",
  port: 8900,
  useSSL: false,
  loglevel: "trace",
});

module.exports = publish = async (keywords, data) => {
  console.log(data);
  const { UAL } = await dkg.asset.create(data, {
    epochsNum: 2,
    maxNumberOfRetries: 30,
    frequency: 1,
    tokenAmount: ethers.utils.parseEther(process.env.TRAC_PAYMENT),
    blockchain: {
      name: "otp::testnet",
      publicKey: process.env.PUBLIC_KEY,
      privateKey: process.env.PRIVATE_KEY,
    },
  });
  console.log(UAL);
  process.exit()
};
