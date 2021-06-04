import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Header from './Header';
import WeatherData from './WeatherData';
import WeatherSearch from './WeatherSearch';

import classes from './Main.module.css'


const Main = () => {

  const [weatherData, setWeatherData] = useState();

    const API_KEY = '8ab4657eacc05266a620fa3f0ee36da6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`

    async function getUser() {
        try {
          const response = await axios.get(url);
          setWeatherData(response);
          console.log(weatherData)
        } catch (error) {
          console.error(error);
        }
      }

      useEffect(() => {
        console.log('useefcct here')
        getUser();
      }, [weatherData])


    return (
        <div className={classes.main}>
            <Header></Header>
            <WeatherSearch></WeatherSearch>
            <WeatherData apiCall={weatherData}></WeatherData>
        </div>
    )
}

export default Main;

// WeatherSearch
// WeatherData