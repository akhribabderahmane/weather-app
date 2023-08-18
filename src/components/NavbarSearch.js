import React,{useContext,useState} from 'react'
import { ManageContext } from '../context/ManageContext';
import {AiOutlineClose,AiOutlineSearch} from 'react-icons/ai'
import { WethearContext } from '../context/WeatherContext';

const NavbarSearch = () => {
    const [searchLocation,setSearchLocation]=useState('')
    const {showNavbar,setShowNavbar}=useContext(ManageContext);
    const classhidden= !showNavbar ? 'hidden' : '';
    const {Location,setLocation}=useContext(WethearContext)
    const handleClick=(e)=>{
        e.preventDefault();
        setLocation(searchLocation);
        setShowNavbar(false);
    }
    return ( 
        <section className={`navbar-container sm:w-[340px] w-full py-6 bg-[#1E213A] absolute z-50 h-screen ${classhidden}`}>
            <div className='flex justify-end  py-2 px-6'>
                <button onClick={()=>{ setShowNavbar(!showNavbar)}}>
                <AiOutlineClose className=' scale-[2] text-white'></AiOutlineClose>
                </button>
            </div> 
            <div className='mt-4 px-3'>
                <form action="" className="search flex flex-row" onSubmit={handleClick}>
                    <div className='flex items-center justify-center pl-3 border-[1px] border-r-0 border-[#E7E7EB]'>
                        <AiOutlineSearch className='scale-[1.6] text-[#616475]'></AiOutlineSearch>
                    </div>
                   <input type="text" className=' outline-none bg-[#1E213A] border-[1px] border-[#E7E7EB] border-l-0 pl-2 py-1 text-lg text-[#616475]' placeholder={`search location`} onChange={(e) => setSearchLocation(e.target.value)} value={searchLocation}/>
                   <button className="btn-submit bg-[#3C47E9] py-1 px-2 text-white ml-2" type='submit'>Search</button>
                </form>
            </div>   
        </section>
     );
}
 
export default NavbarSearch;