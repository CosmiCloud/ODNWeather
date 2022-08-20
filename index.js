const getRandomWeatherdata = require("./src/queryWeather");
const publishWeatherdataEntity = require("./src/queryOTNode");

// get random entity from weather.gov
getRandomWeatherdata().then(({ keywords, data }) => {
  // publish weather.gov entity
  publishWeatherdataEntity(keywords, data);
});
