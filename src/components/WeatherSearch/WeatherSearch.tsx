import { ChangeEvent, FormEvent, useState } from "react";
import { IWeather } from "../../models/IWeather";
import { getWeather } from "../../models/weatherService";
import "../WeatherSearch/WeatherSearch.scss";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";

export function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<IWeather>();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    let weather = await getWeather(city);
    setWeather(weather);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <>
      <div className="weather">
        <form className="weather__form" onSubmit={handleSubmit}>
          <input
            className="weather__input"
            type="text"
            value={city}
            onChange={handleChange}
          />
          <button className="weather__btn" type="submit">
            Search
          </button>
        </form>

        <div className="showWeather">
          <p className="showWeather__localTime">{weather?.datetime}</p>
        </div>

        <div className="tempcontainer">
          <img src={weather?.iconId} alt="" />
          <p>{weather?.description}</p>
          <p className="tempcontainer__temp">{weather?.temp}</p>
          <p className="tempcontainer__celsius">°C</p>
        </div>

        <div className="weatherDetails">
          <div className="weatherDetails__container">
            <p className="weatherDetails__container__desc">
              Wind
              <p className="weatherDetails__container__span">
                {weather?.windspeed}
              </p>
            </p>
          </div>

          <div className="weatherDetails__container">
            <p className="weatherDetails__container__desc">
              Humidity
              <p className="weatherDetails__container__span">
                {weather?.humidity}
              </p>
            </p>
          </div>

          <div className="weatherDetails__container">
            <p className="weatherDetails__container__desc">
              Feels like
              <p className="weatherDetails__container__span">
                {weather?.feelslike}
              </p>
            </p>
          </div>
        </div>

        <div className="sun">
          <GiSunrise className="sun__icon"></GiSunrise>
          <p className="sun__sunrise">{weather?.sunrise}</p>
          <GiSunset className="sun__icon"></GiSunset>
          <p className="sun__sunset">{weather?.sunset}</p>
        </div>
      </div>
    </>
  );
}
