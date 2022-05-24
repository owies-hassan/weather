import React from 'react';

import moment from "moment";
import ImageWeather from "../ImageWeather";import useWeather from "../Hooks/useWeather";
import {SwiperSlide,Swiper} from 'swiper/react'
import {Navigation} from "swiper";
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore from 'swiper';
import ConvertCelsius from "../ConvertCelsius";
import './swiperWeatherForcast.css'
const SwiperWeatherForcast = () => {
    const {weather}=useWeather('forecast')
    SwiperCore.use([Navigation]);

    return (
     <div className='section-forecast'>
         {weather.length!== 0&&
             <Swiper
                 navigation={true}
                 breakpoints={{
                     576: {
                         slidesPerView: 5,
                     },
                     320: {
                         slidesPerView: 2,
                     }
                 }}
             >
                 {weather?.list?.map(item=>{
                     return(
                         <SwiperSlide key={Math.random()*921}>
                             <div   className='content-forecast'>
                                 <p>
                                     <span className='style-global-span'> {moment(item.dt*1000).format('dddd').split('').slice(0,3)}</span>
                                     <span className='style-global-span'> {(item.dt_txt).substring(8,10)}</span>,
                                     <span className='style-global-span'>{(item.dt_txt).split('').slice(10,-3)}</span>
                                 </p>

                                 <p className='position-relative'>
                                     <span className='style-global-span'>{ConvertCelsius(item.main.temp_max,'')} / </span>
                                     <span className='style-global-span-temp'> {ConvertCelsius(item.main.temp-2,'')}</span>
                                 </p>

                                 <div>{item.weather.map(item=>{
                                     return (
                                         <div key={Math.random()*12}>
                                             {ImageWeather(item.description)}
                                         </div>
                                     )
                                 })}
                                 </div>

                             </div>
                         </SwiperSlide>
                     )

                 })}
             </Swiper>

         }
     </div>
    );
};

export default SwiperWeatherForcast;