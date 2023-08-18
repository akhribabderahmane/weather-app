import React,{useContext} from 'react'
import {BiCurrentLocation} from 'react-icons/bi'
import {MdLocationOn} from 'react-icons/md'
import cloudBackground from './../assets/Cloud-background.png'
import './components.css';
import { WethearContext } from '../context/WeatherContext';
import { LocationContext } from '../context/LocationContext';
import { ManageContext } from '../context/ManageContext';
const Sidbar = () => {
    const {todayWeather,weatherIconMapping,setLocation}=useContext(WethearContext);
    const {adress,setAdress}=useContext(LocationContext);
    const iconUrl=weatherIconMapping[todayWeather.weatherStatus];
    const {showNavbar,setShowNavbar}=useContext(ManageContext);
    return ( 
        <section className='sidebar bg-[#1E213A] md:w-[340px] w-full py-6 relative  flex flex-col min-h-full'>
            <div className=' absolute top-[15%] z-10'>
                <img src={cloudBackground} alt="" className=' scale-[1.4] opacity-10' />
            </div>
            <div className="header flex flex-row justify-between items-center px-6">
                <button className='text-white bg-[#6E707A] opacity-95 hover:opacity-100 px-4 py-2' onClick={()=> setShowNavbar(true)}>Search for places</button>
                <button className='bg-[#6E707A] p-2 rounded-full' onClick={()=>setLocation(adress.city)}>
                     <BiCurrentLocation className=' scale-[1.5] text-white'/>
                </button>
            </div> 
            <div className=' flex flex-col items-center justify-between h-full pt-12'>

            <div className='icon mr-8 mt-2'>
                <img src={iconUrl} className='scale-90' />
            </div> 

            <div className='flex flex-col items-center mb-14'>
                <p className=' text-[#E7E7EB] text-8xl'>{todayWeather.temperature}<span className=' text-[#A09FB1] text-4xl font-relway'>℃</span></p>
                <p className='text-4xl text-[#A09FB1] text-center'>{todayWeather.weatherStatus}</p>
            </div>

            <div className='flex flex-col items-center gap-3'>
            <p  className=' text-[#A09FB1]'>Today  .  {todayWeather.date}</p>
            <div className=' flex flex-row items-center text-[#88869D] text-lg gap-2'>
                <MdLocationOn className='scale-[1.3]'></MdLocationOn>
                <span> {todayWeather.location}</span>
            </div>
            </div>


            </div>  
        </section>
     );
}
 
export default Sidbar;