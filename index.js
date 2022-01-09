const getRandomWeatherdata = require("./src/queryWeather");
const publishWeatherdataEntity = require("./src/queryOTNode");

// get random entity from wikidata.org
getRandomWeatherdata().then(({assets, keywords}) => {
  // publish wikidata entity
  publishWeatherdataEntity(assets, keywords);
});
