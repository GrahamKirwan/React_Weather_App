import React from 'react';

import classes from './WeatherData.module.css'


const WeatherData = (props) => {
console.log(props.apiCall)
    return (
        <div className={classes['data-container']}>
            <div className={classes['data-container__item']}>
                <p className={classes['heading']}>Temperature</p>
                <p className={classes['number']}>{props.apiCall.temp}</p>
            </div>
            <div className={classes['data-container__item']}>
                <p className={classes['heading']}>Pressure</p>
                <p className={classes['number']}>{props.apiCall.pressure}</p>
            </div>
            <div className={classes['data-container__item']}>
                <p className={classes['heading']}>Humidity</p>
                <p className={classes['number']}>{props.apiCall.humidity}</p>
            </div>
        </div>
       
    )
}

export default WeatherData;