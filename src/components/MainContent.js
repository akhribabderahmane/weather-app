import React,{useContext} from 'react'
import {TbTemperatureCelsius,TbTemperatureFahrenheit} from 'react-icons/tb'
import { WethearContext } from '../context/WeatherContext';
import OneDay from './OneDay';
import TodayHighlights from './TodayHighlights';


const MainContent = () => {
    const {next5DaysWeather}=useContext(WethearContext);
    return ( 
        <section className=' bg-[#100E1D] flex-1 relative z-20 pt-6'>
            <div className=' flex flex-row gap-2 justify-end pr-8'>
                <button className=' text-[#100E1D] bg-[#E7E7EB] p-4 rounded-full'><TbTemperatureCelsius className='scale-[1.7]'></TbTemperatureCelsius></button>
                <button className=' text-[#E7E7EB] bg-[#585676] p-4 rounded-full'><TbTemperatureFahrenheit className='scale-[1.7]'></TbTemperatureFahrenheit></button>
            </div>
            <div className='sm:flex grid grid-cols-2 sm:flex-row flex-col gap-4 mt-6 sm:px-28 px-10'>
                {next5DaysWeather.map((onedayWeather)=>{
                    return(
                        <OneDay key={onedayWeather.id} weather={onedayWeather}></OneDay>
                    )
                })}
            </div>
            <TodayHighlights></TodayHighlights>
            <div className='text-xenter text-xl text-[#E7E7EB] w-full flex items-center justify-center py-2 font-relway'>
            created by <span className=' font-bold underline mx-2'> abderahmane Akhrib</span>
            </div>
        </section>
     );
}
 
export default MainContent;