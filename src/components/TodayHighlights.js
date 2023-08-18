import React,{useContext} from 'react'
import { WethearContext } from '../context/WeatherContext';
import {BiSolidNavigation} from 'react-icons/bi'

const TodayHighlights = () => {
    const {todayHighlights}=useContext(WethearContext);
    const barWidth=todayHighlights.humidity+"%"
    const windDir=-45+todayHighlights.windStatus.direction;
    return ( 
        <section className=' mt-8 sm:px-28 px-8 sm:pb-0 pb-2'>
            <h1 className='text-3xl text-[#E7E7EB] mb-4 font-semibold'>Today's Hightlights </h1>
        <article className='grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-1 gap-x-12 gap-y-6 '>
            
            <div className='windstatus bg-[#1E213A] flex flex-col items-center justify-between py-6 gap-3'>
                <p className=' text-[#E7E7EB] text-lg font-semibold'>Wind status</p>
                <p className=' text-6xl text-[#E7E7EB] font-bold '>{todayHighlights.windStatus.speed}<span className='text-3xl font-normal'> mph</span></p>
                <div className=' flex flex-row items-center gap-1'>
                    <div className='p-3 bg-[#FFFFFF44] rounded-full'>
                        <BiSolidNavigation className='text-[#E7E7EB] scale-110' style={{ transform: `rotate(${windDir}deg)` }} ></BiSolidNavigation>
                    </div>
                    <p className=' text-[#E7E7EB]'>{todayHighlights.windStatus.windAbreviation}</p>
                </div>
            </div>

            <div className='humidit bg-[#1E213A] flex flex-col items-center justify-between py-6 gap-3'>
                <p className=' text-[#E7E7EB] text-lg font-semibold'>Humidity</p>
                <p className=' text-6xl text-[#E7E7EB] font-bold '>{todayHighlights.humidity} %</p>
                <div className=' w-[80%]'>
                    <div className=' w-full flex flex-row justify-between text-white text-sm font-semibold'>
                        <p className=''>0</p>
                        <p className=''>50</p>
                        <p className=''>100</p>
                    </div>
                    <div className='w-full h-2 bg-slate-400 rounded-full'>
                        <div className={`bg-yellow-500 h-full rounded-full`} style={{ width: barWidth }}></div>
                    </div>
                    <div className=' w-full text-white flex justify-end text-sm font-semibold'>
                        <p>%</p>
                    </div>
                </div>
            </div>
              
            <div className='windstatus bg-[#1E213A] flex flex-col items-center justify-between py-6 gap-3 h-fit'>
                <p className=' text-[#E7E7EB] text-lg font-semibold'>Visibility</p>
                <p className=' text-6xl text-[#E7E7EB] font-bold '>{todayHighlights.visibility} <span className='text-3xl font-normal'>miles</span></p>
            </div>
            <div className='windstatus bg-[#1E213A] flex flex-col items-center justify-between py-6 gap-3 h-fit'>
                <p className=' text-[#E7E7EB] text-lg font-semibold'>Air Pressure</p>
                <p className=' text-6xl text-[#E7E7EB] font-bold '>{todayHighlights.airPressure} <span className='text-3xl font-normal'>mb</span></p>
            </div>
        </article>
        </section>
     );
}
 
export default TodayHighlights;