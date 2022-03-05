import Axios from "axios";

export const LocationSearch = (loc) =>
  Axios.get(
    "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=" +
      loc
  );

export const GetCityInfo = (woeid) =>
  Axios.get(
    "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/" +
      woeid
  );
