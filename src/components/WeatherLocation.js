import React from 'react';

import classes from './WeatherLocation.module.css'


const WeatherLocation = (props) => {
    return (
        <div className={classes['location-container']}>
            <p>This is the forecast for <span>{props.city}</span></p>
        </div>
       
    )
}

export default WeatherLocation;