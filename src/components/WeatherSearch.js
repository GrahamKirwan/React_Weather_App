import React, {useState} from 'react';

import classes from './WeatherSearch.module.css'


const WeatherSearch = (props) => {

    const [cityName, setCityName] = useState('');

    const searchHandler = (e) => {
        e.preventDefault();
        let location = e.target[0].value;
        setCityName('');
        props.apiLocationCall(location);
    }
    return (
        <div className={classes.searchBox}>
            <form onSubmit={searchHandler}>
                <input type="text"></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default WeatherSearch;