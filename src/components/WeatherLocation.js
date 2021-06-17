import React, {useContext} from 'react';

import Context from '../Context'

import classes from './WeatherLocation.module.css'


const WeatherLocation = (props) => {

    const {city} = useContext(Context);

    return (
        <div className={classes['location-container']}>
            <p>This is the forecast for <span>{city}</span></p>
        </div>
       
    )
}

export default WeatherLocation;