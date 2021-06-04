import React, {useEffect} from 'react';
import axios from 'axios';

import Header from './Header';

import classes from './Main.module.css'


const Main = () => {

    const API_KEY = '8ab4657eacc05266a620fa3f0ee36da6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`

    async function getUser() {
        try {
          const response = await axios.get(url);
          console.log(response.data.main);
        } catch (error) {
          console.error(error);
        }
      }

      useEffect(() => {
        getUser();
      }, [])

    return (
        <div className={classes.main}>
            <Header></Header>
        </div>
    )
}

export default Main;