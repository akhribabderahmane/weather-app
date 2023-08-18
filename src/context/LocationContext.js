import React, { createContext, useState, useEffect } from "react";

export const LocationContext = createContext();

const LocationContextProvider = (props) => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [adress, setAdress] = useState(null);
  const [apiUrl, setApiUrl] = useState(null);
  const [addressData,setAddressData]=useState(null)

  const setCoords = (position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log("position not avaible");
    };
  const handleError = () => {
    console.log("problem in set coords in geolocation");
  };
  const setLocation = () => {
    if (navigator.geolocation) {
      console.log("geolocation avaible");
      navigator.geolocation.getCurrentPosition(setCoords, handleError);
      console.log("here is coords lat :", lat, " long :", long);
    } else {
      console.log("geolocation not avaible");
    }
  };

  const fetchingData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      setAddressData(data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error to handle it higher up the chain
    }
  };

  
  useEffect(()=>{
    setLocation();
  },[]);

  useEffect(()=>{
    setApiUrl(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`);
  },[lat,long])

  useEffect(()=>{
    if(apiUrl){
       fetchingData();
    }   
  },[apiUrl]);

  useEffect(()=>{
      if(addressData){
        setAdress({country:addressData.countryName,state:addressData.principalSubdivision,city:addressData.city})
      }
  },[addressData])

  return (
    <LocationContext.Provider value={{adress,setAdress}}>
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
