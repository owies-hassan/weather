import axios from "axios";
import {useEffect, useState} from "react";
import { useSelector} from "react-redux";



const key='84df223702b84a2178e8c3e19675b3a3'
const useWeather=(type)=>{
    const{name}=useSelector(state=>state);
    const[weather,setWeather]=useState([]);
    const[lat,setLat]=useState('')
    const[lon,setLon]=useState('')
    const[status,setStatus]=useState('')
    const[loading,setLoading]=useState(true)
    const [error,setError]=useState(false)


    const fetchForecastWeather = async () => {
        await axios.get(`https://api.openweathermap.org/data/2.5/${type}?q=${name}&appid=${key}`).then((res) => {
            setWeather(res.data)
            setLoading(true)
            setError(false)
        }).catch((error) => {
            setError(true)
            setLoading(false)
        })
    }
    const getLocation = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude)
                setLon(position.coords.longitude)
            })

    }

    useEffect(()=>{
        const fetchLocalWeather=async ()=>{
            getLocation();
            if (lat&lon&!name){
                const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/${type}?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${key}`)
                setWeather(await data)
                setLoading(false)
                setStatus('search here')
            }else if (!lat&&!lon){
                setStatus('geolocation is not support by your browser you can search here about any country ')
            }
        }
         fetchLocalWeather()

    },[lat,lon])

    useEffect(() => {


        const timer=setTimeout(()=>{
            if (name){
                return fetchForecastWeather();
            }

        },2000)

        return ()=>{
            clearTimeout(timer)
        }

    }, [name,error])

    return {weather, loading,status,error}

}

export default useWeather;