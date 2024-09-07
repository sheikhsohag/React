import React, {useState, useEffect} from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading,  setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
       fetch(url)
       .then((res)=>{
        if(!res.ok){
            throw Error("Fetching is not successful!");
        }
        return res.json()
       })
       .then((data)=>{
        setData(data);
        setIsLoading(false);
        setError(null);
       })
       .catch((error)=>{
        setError(error.message)
        setIsLoading(false);
       })
    }, [url])

    return {data, isLoading, error}
}
