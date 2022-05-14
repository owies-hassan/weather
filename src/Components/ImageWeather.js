import React from 'react';
import { Cloud,Clouds,CloudSnow,CloudLightningRain,CloudRainHeavy,BrightnessHigh,CloudDrizzle,CloudSun,Wind } from "react-bootstrap-icons";

const ImageWeather = (imgState) => {


    switch (imgState) {
        case 'clear sky':
              return <CloudSun color='white' size={60}/>
        case 'broken clouds':
            return <Clouds color='white' size={60}/>
        case  'overcast clouds':
            return <Clouds color='white' size={60}/>
        case 'few clouds':
            return <Cloud color='white' size={60}/>
        case 'mist':
            return <Wind color='white' size={60}/>
        case 'rain':
            return <CloudRainHeavy color='white' size={60}/>
        case 'scattered clouds':
            return <Cloud color='white' size={60}/>
        case 'snowflake':
            return <CloudSnow color='white' size={60}/>
        case 'thunderstorm':
            return <CloudLightningRain color='white' size={60}/>
      case 'shower rain':
            return <CloudDrizzle color='white' size={60}/>
        case 'light rain':
            return <CloudRainHeavy color='white' size={60}/>

         default:
            return  <BrightnessHigh color='white' size={60}/>
    }
};

export default ImageWeather;