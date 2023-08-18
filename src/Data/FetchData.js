import React,{useState,useEffect} from 'react'


const FetchData = (url) => {

    const [data,setData]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);
    

    useEffect(()=>{
    const abortCont=new AbortController();
    fetch(url)
    .then(response =>{
        if(!response.ok){
            throw Error('could not fetch data from this resource');
        }
        return response.json();
    }
    ).then(data =>{
        setData(data);
        setIsLoading(false);
        setError(null);
    }
    ).catch(err =>{
        if(err.name='abortError'){
            console.log('fetch data aborted');
        }else{
            setIsLoading(false);
            setError(err.name);
        }
    })
    },[url])
    return {data,isLoading,error};
}
 
export default FetchData;