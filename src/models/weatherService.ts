import axios from "axios";
import { IWeatherResponse } from "./IWeatherResponse";

export const getWeather = async (city: string) => {
  let response = await axios.get<IWeatherResponse>(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=TVMZN2PEMCY5FL9EDQMYMDS3E&contentType=json`
  );
  return response.data.currentConditions;
};
