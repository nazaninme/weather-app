import React, { useState } from 'react'
import axios from 'axios'

const URL="https://api.openweathermap.org/data/2.5/weather";
const API_KEY="75c10f679078c5f263f4657b9e74798e";
export default function SearchBox() {

const [weather,setWeather]=useState({});
const [city,setCity]=useState("");
const getWeather=async(name)=>{
    const {data}=await axios.get(URL,{
        params:{
            q:name,
            APPID:API_KEY,
        },
    });
    setWeather(data);
}; 
console.log(weather);
  return (
    <div>
        
        <div className='container'>
        <input type="text" placeholder='Enter your Location...' onChange={(e)=>setCity(e.target.value)} />
        <button type='submit' onClick={()=>getWeather(city)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
        </button>
       {weather.main?(
        <div>
            <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="" />
            <div>{weather.weather[0].main}</div>
        </div>
       ): null
       }
       
        </div>
        
    </div>
  )
}
