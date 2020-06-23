import React,{useState,useEffect} from "react";
import axios from 'axios';
import "./App.css";

import Card from './components/card';

function App() {

    const [data,setData] = useState({});
    const date = '2020-06-06';
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

export default App;
