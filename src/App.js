import React from 'react'
import {MainContent,NavbarSearch,OneDay,Sidebar,TodayHighlights} from './components/index'
import WeatherContextProvider from './context/WeatherContext';
import LocationContextProvider, { LocationContext } from './context/LocationContext';
import ManageContextProvider from './context/ManageContext';
function App() {
  return (
    <ManageContextProvider>
    <LocationContextProvider>
    <WeatherContextProvider>
    <div className="app max-w-screen min-h-full bg-rose-500 flex sm:flex-row flex-col ">
       <NavbarSearch></NavbarSearch>
       <Sidebar></Sidebar>
       <MainContent></MainContent>
    </div>
    </WeatherContextProvider>
    </LocationContextProvider>
    </ManageContextProvider>
  );
}

export default App;
