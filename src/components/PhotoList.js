import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Card from './card';

const PhotoList = ()=>{

const [data,setData] = useState({});


    useEffect(()=>{

        axios

        .get(`https://api.nasa.gov/planetary/apod?api_key=tAQI0T7EkDJ2b75smGQMSaDgMTAaPnrB6qhHbpm6`)
        .then(resp=>{
            console.log(resp.data)
            
            setData(resp.data);
        })
        .catch(err=>{
            console.log('something wrong ', err)
        })


    },[])

  return (
    <div className="App">
    
      <Card image={data.url} date={data.date} explanation={data.explanation}/>
    </div>
  );
}
  export default PhotoList