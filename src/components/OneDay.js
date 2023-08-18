import React,{useContext} from 'react'
import lightrain from './../assets/Shower.png'
import { WethearContext } from '../context/WeatherContext';

const OneDay = ({weather}) => {
    const {weatherIconMapping}=useContext(WethearContext);
    const iconUrl=weatherIconMapping[weather.iconURL];
    return ( 
        <article className='bg-[#1E213A] flex flex-col items-center justify-between sm:w-1/5 w-11/12 mx-auto aspect-[0.7] py-4'>
            <p className='text-semibold text-[#E7E7EB]'>{weather.id===1 ? 'tomorrow' : weather.date}</p>
            <img src={iconUrl} className='w-1/2' alt="" />
            <div className="flex flex-row gap-4">
                <p className='text-[#E7E7EB] '>{weather.temperature.dayTemp} ℃</p>
                <p className='text-[#A09FB1] mt-[2px]'>{weather.temperature.nightTemp} ℃</p>
            </div>
        </article>
     );
}
 
export default OneDay;