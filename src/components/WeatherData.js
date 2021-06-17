import React, {useContext} from 'react';

import Context from '../Context'

import classes from './WeatherData.module.css'


const WeatherData = () => {

    const {apiCall} = useContext(Context);

    return (
        <div className={classes['data-container']}>
            <div className={classes['data-container__item']}>
                <p className={classes['heading']}>Temperature</p>
                <p className={classes['number']}>{apiCall.temp}</p>
            </div>
            <div className={classes['data-container__item']}>
                <p className={classes['heading']}>Pressure</p>
                <p className={classes['number']}>{apiCall.pressure}</p>
            </div>
            <div className={classes['data-container__item']}>
                <p className={classes['heading']}>Humidity</p>
                <p className={classes['number']}>{apiCall.humidity}</p>
            </div>
        </div>
       
    )
}

export default WeatherData;