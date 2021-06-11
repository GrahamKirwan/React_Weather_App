import React from 'react';

import classes from './WeatherSearch.module.css'


const WeatherSearch = () => {

    const searchHandler = () => {console.log('sjbsbfksn')}
    return (
        <div className={classes.searchBox}>
            <input onSubmit={searchHandler}></input>
            <button>Search</button>
        </div>
    )
}

export default WeatherSearch;