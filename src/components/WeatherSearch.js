import React from 'react';

const WeatherSearch = () => {

    const searchHandler = () => {console.log('sjbsbfksn')}
    return (
        <div>
            <input onSubmit={searchHandler}></input>
            <button>Search</button>
        </div>
    )
}

export default WeatherSearch;