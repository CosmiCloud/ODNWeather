const axios = require("axios");
const fs = require("fs");

module.exports = getRandomWeatherdata = async () => {
  const station_index = Math.floor(Math.random() * 499);

  console.log("\x1b[35mRetrieving data from a random weather station from weather.gov...");
  //get weather stations
  const stations_result = await axios
    .get(`https://api.weather.gov/stations?limit=500`)
    .catch((error) => console.log(`error querying for stations from weather.gov. ${error}`));

  //set name, location, and station id
  name = stations_result.data.features[station_index].properties.name
  timeZone = stations_result.data.features[station_index].properties.timeZone
  station = stations_result.data.observationStations[station_index];
  parse_array = station.split('/');
  station_id = parse_array[parse_array.length-1]

  //get latest obeservations from weather station matching id
  const latest_station_observations = await axios
    .get(`https://api.weather.gov/stations/${station_id}/observations/latest?require_qc=false`)
    .catch((error) => console.log(`error querying weather.gov station ${station_id} - ${error}`));

  observation_data = delete latest_station_observations.data["@context"][1]["@version"]
  console.log("\x1b[32mData has been recieved!");
  console.log(" ");
  console.log("\x1b[35mWriting data to weatherdata.json to this directory...");

  //write data for publishing
  fs.writeFileSync("weatherdata.json", JSON.stringify(latest_station_observations.data));
  console.log("\x1b[32mFinished writing weatherdata.json!");
  console.log(' ');
  console.log(`\x1b[35mPublishing weather data from \x1b[32m${name} \x1b[35mlocated in \x1b[32m${timeZone}\x1b[35m timezone!`);

  //build assets
  return { assets: [latest_station_observations.data.properties["@type"]], keywords: [latest_station_observations.data.properties["@id"]]};
};
