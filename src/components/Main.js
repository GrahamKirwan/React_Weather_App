import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Header from './Header';
import WeatherData from './WeatherData';
import WeatherLocation from './WeatherLocation';
import WeatherSearch from './WeatherSearch';

import classes from './Main.module.css'


const Main = () => {

  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState('Toronto');



    async function getUser(location) {

      const API_KEY = '8ab4657eacc05266a620fa3f0ee36da6';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`

        try {
          const response = await axios.get(url);
          setWeatherData(response.data.main);
        } catch (error) {
          console.error("error" + error);
        }
      }

      useEffect(() => {
        getUser(city);
      }, [])

      const apiLocationHandler = (location) => {
        getUser(location);
        setCity(location);
      }

    return (
        <div className={classes.main}>
            <Header></Header>
            <WeatherSearch apiLocationCall={apiLocationHandler}></WeatherSearch>
            <WeatherLocation city={city}></WeatherLocation>
            {weatherData ? <WeatherData apiCall={weatherData}></WeatherData> : ''}
        </div>
    )
}

export default Main;
