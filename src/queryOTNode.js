require("dotenv").config();
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
    visibility: "public",
    keywords: keywords,
    holdingTimeInYears: 1,
    tokenAmount: 1,
    blockchain: {
      name: "otp",
      publicKey: process.env.PUBLIC_KEY,
      privateKey: process.env.PRIVATE_KEY,
    },
  });
  console.log(UAL);
};
