const axios = require("axios");
const fs = require("fs");

function randomWord(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; ++i) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function randomWordArray() {
  let result = [];
  for (let i = 0; i < Math.floor(Math.random() * 10) + 3; ++i) {
    result.push(randomWord(Math.floor(Math.random() * 25) + 5));
  }
  return result;
}

module.exports = getRandomWeatherdata = async () => {
  const keywords = randomWordArray();
  const station_index = Math.floor(Math.random() * 499);

  console.log(
    "\x1b[35mRetrieving data from a random weather station from weather.gov..."
  );
  //get weather stations
  const stations_result = await axios
    .get(`https://api.weather.gov/stations?limit=500`)
    .catch((error) =>
      console.log(`error querying for stations from weather.gov. ${error}`)
    );

  //set name, location, and station id
  name = stations_result.data.features[station_index].properties.name;
  timeZone = stations_result.data.features[station_index].properties.timeZone;
  station = stations_result.data.observationStations[station_index];
  parse_array = station.split("/");
  station_id = parse_array[parse_array.length - 1];

  //get latest obeservations from weather station matching id
  const latest_station_observations = await axios
    .get(
      `https://api.weather.gov/stations/${station_id}/observations/latest?require_qc=false`
    )
    .catch((error) =>
      console.log(`error querying weather.gov station ${station_id} - ${error}`)
    );

  console.log("\x1b[32mData has been recieved!");
  console.log(
    `\x1b[35mPublishing weather data from \x1b[32m${name} \x1b[35mlocated in \x1b[32m${timeZone}\x1b[35m timezone!`
  );

  //build assets
  return {
    keywords: keywords,
    data: latest_station_observations.data,
  };
};
