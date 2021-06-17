import React, {useState, useContext} from 'react';

import Context from '../Context';

import classes from './WeatherSearch.module.css'


const WeatherSearch = () => {

    const {apiLocationCall} = useContext(Context);

    const [cityName, setCityName] = useState('');

    const inputChangeHandler = (e) => {
        setCityName(e.target.value);
    }

    const searchHandler = (e) => {
        e.preventDefault();
        let location = e.target[0].value;
        setCityName('');
        apiLocationCall(location);
    }
    return (
        <div className={classes.searchBox}>
            <form onSubmit={searchHandler}>
                <input type="text" onChange={inputChangeHandler} value={cityName}></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default WeatherSearch;