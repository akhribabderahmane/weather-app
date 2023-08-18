import React, { createContext, useState, useContext, useEffect } from "react";
import FetchData from "../Data/FetchData";
import { LocationContext } from "./LocationContext";
import Clear from './../assets/Clear.png'
import HeavyCloud from './../assets/HeavyCloud.png';
import HeavyRain from './../assets/HeavyRain.png'
import Hail from './../assets/Hail.png';
import Snow from './../assets/Snow.png';
import Sleet from './../assets/Sleet.png';
import Shower from './../assets/Shower.png';
import PartiallyCloudy from './../assets/PartiallyCloudy.png'
import LightRain from './../assets/LightRain.png'
import Thunderstorm from './../assets/Thunderstorm.png'
export const WethearContext = createContext();

const WeatherContextProvider = (props) => {

  const [weatherIconMapping, setIconsUrl] = useState({
    Clear: Clear,
    Hail:Hail,
    'Light Rain':LightRain,
    'Heavy Rain':HeavyRain,
    'Partially cloudy':PartiallyCloudy,
    'Heavy Cloud':HeavyCloud,
    Shower: Shower,
    Sleet: Sleet,
    Snow:Snow,
    Thunderstorm: Thunderstorm,
    Mist: PartiallyCloudy,
    Haze: PartiallyCloudy,
    Fog:HeavyCloud,
    'Rain, Partially cloudy':Shower,
    "Rain, Overcast":HeavyRain,
    "Overcast":HeavyCloud,
    Rain:HeavyRain
});

  const [location, setLocation] = useState("");

  const [todayWeather, setTodayWeather] = useState({
    iconsURL: "",
    temperature: "",
    weatherStatus: "",
    date: "",
    location: "",
  });
  const [next5DaysWeather, setNext5DaysWeather] = useState([
    {
      date: "",
      iconURL: "",
      temperature: {
        dayTemp: "",
        nightTemp: "",
        id:""
      },
    },
    {
      date: "",
      iconURL: "",
      temperature: {
        dayTemp: "",
        nightTemp: "",
        id:""
      },
    },
  ]);

  const [todayHighlights, setTodayHighlights] = useState({
    windStatus: {
      speed: "",
      direction: "",
      angle: "",
    },
    humidity: "",
    visibility: "",
    airPressure: "",
  });
  const getWindDirectionAbbreviation=(degrees)=>{
    if (degrees >= 337.5 || degrees < 22.5) {
      return "N";
    } else if (degrees >= 22.5 && degrees < 67.5) {
      return "NE";
    } else if (degrees >= 67.5 && degrees < 112.5) {
      return "E";
    } else if (degrees >= 112.5 && degrees < 157.5) {
      return "SE";
    } else if (degrees >= 157.5 && degrees < 202.5) {
      return "S";
    } else if (degrees >= 202.5 && degrees < 247.5) {
      return "SW";
    } else if (degrees >= 247.5 && degrees < 292.5) {
      return "WSW";
    } else if (degrees >= 292.5 && degrees < 337.5) {
      return "W";
    }
  }

  const { adress } = useContext(LocationContext);
  useEffect(() => {
    if (adress && adress.state) {
      const encodedLocation = encodeURIComponent(adress.city);
      setLocation(encodedLocation);
    }
  }, [adress]);

  let { data, isLoading, error } = FetchData(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=metric&key=WBU2NVF2CF9EBDDDTJXGCDKNP&contentType=json`
  );


  useEffect(() => {
    // console.log('hii',data);
    if (data) {
      // firstly ill fill the today weather ...
      const inputDay=data.days[0].datetime;
      const date=new Date(inputDay);
      const options = { weekday: 'short', day: 'numeric', month: 'short' };
      const formattedDate = date.toLocaleString('en-US', options);
      setTodayWeather({
        iconsURL: `./../assets/${data.days[0].conditions}.png`,
        temperature: Math.floor(data.days[0].temp),
        weatherStatus: data.days[0].conditions,
        date: formattedDate,
        location: data.resolvedAddress,
      });
      // now i will set the next5days ...........
      const daysArray = [];
      for (let i = 1; i < 6; i++) {
        const inputDay=data.days[i].datetime;
        const date=new Date(inputDay);
        const options = { weekday: 'short', day: 'numeric', month: 'short' };
        const formattedDate = date.toLocaleString('en-US', options);
        const day = {
          date: formattedDate,
          iconURL: `${data.days[i].conditions}`,
          temperature: {
            dayTemp: Math.floor(data.days[i].tempmax),
            nightTemp: Math.floor(data.days[i].tempmin),
          },
          id:i,
        };
        daysArray.push(day);
      }
       setNext5DaysWeather(daysArray);
      // now i will set the weather highlights
      setTodayHighlights({
        windStatus: {
          speed:Math.floor(data.days[0].windspeed),
          direction:data.days[0].winddir,
          angle:data.days[0].windgust,
          windAbreviation:getWindDirectionAbbreviation(data.days[0].winddir)
        },
        humidity:Math.floor(data.days[0].humidity),
        visibility: data.days[0].visibility,
        airPressure:data.days[0].pressure,
      });
    }
    }, [data]);

  return (
    <WethearContext.Provider value={{data,next5DaysWeather,todayWeather,todayHighlights,weatherIconMapping,Location,setLocation}}>
      {props.children}
    </WethearContext.Provider>
  );
};

export default WeatherContextProvider;
