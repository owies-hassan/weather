import React, {Fragment, useEffect} from 'react';
import useWeather from "../Hooks/useWeather";
import ImageWeather from "../ImageWeather";
import ConvertCelsius from "../ConvertCelsius";
import moment from "moment";
import './StateWeatherNow.css'
import {useDispatch} from "react-redux";
import {handleBgImage} from "../../Redux/Actions";

const StateWeatherNow = () => {
    const dispatch=useDispatch()

    const {weather,status}=useWeather('weather')


    useEffect(()=>{
       if (weather.length!==0){
            dispatch(handleBgImage(weather?.weather[0].description))
       }else {
           console.log('false')
       }


    },[weather])

    return (
        <Fragment>
            {weather.length!== 0?
                <div className='section-weather'>
                    <div className='content-weather-info'>
                        <p className='country padding-country'>
                            <span className='style-global-p'>{weather?.sys?.country},</span>
                            <span className='style-global-p'> {weather?.name}</span>
                        </p>
                        <p  className='style-global-p padding-title-temp'>{ConvertCelsius(weather?.main.temp_max,'C')}</p>
                        {ImageWeather(weather?.weather[0].description)}
                        <p className='style-global-p'>{weather?.description}</p>
                    </div>

                    <div className='content-weather-details'>
                        <p className='style-global-p padding-day'>{moment(weather?.dt * 1000).format('dddd')}</p>
                        <p className='humidity padding-info'>
                            <span className='style-global-span'> humidity : </span>
                            <span className='style-global-span'> {weather?.main.humidity}</span>
                        </p>
                        <p className='speed padding-info'>
                            <span className='style-global-span'> speed : </span>
                            <span className='style-global-span'> {weather.wind.speed} </span>
                        </p>
                        <p className='pressure padding-info'>
                            <span className='style-global-span'> pressure : </span>
                            <span className='style-global-span'> {weather.main.pressure} </span>
                        </p>

                    </div>

                    <div>

                    </div>
            </div>
              :<p className='style-global-span'>{status}</p>
            }
        </Fragment>
    );
};

export default StateWeatherNow;