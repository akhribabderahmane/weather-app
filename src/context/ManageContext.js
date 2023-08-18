import React,{createContext,useState} from 'react'
export const ManageContext=createContext();
const ManageContextProvider = (props) => {
    const [showNavbar,setShowNavbar]=useState(false);
    return ( 
         <ManageContext.Provider value={{showNavbar,setShowNavbar}}>
          {props.children}
         </ManageContext.Provider>
     );
}
 
export default ManageContextProvider;