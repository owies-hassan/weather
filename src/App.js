


import SearchWeather from "./Components/SearchWeather/SearchWeather";
import StateWeatherNow from "./Components/StateWeatherNow/StateWeatherNow";
import SwiperWeatherForcast from "./Components/swiperWeatherForcast/swiperWeatherForcast";
import {Container} from "@mui/material";
import {useSelector} from "react-redux";
import './App.css'



function App() {
const{bgImage}=useSelector(state=>state)


  return (
    <div className="App">
      <img className='absolute-img'  src={bgImage?`../img/${bgImage}.bg.jpg`:'../img/basic.bg.jpg'}/>
        <Container>
            <SearchWeather/>
            <StateWeatherNow/>

        </Container>
        <SwiperWeatherForcast/>

    </div>
  );
}

export default App;
