import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Card from './card';





const PhotoList = ()=>{

const [data,setData] = useState({});
const[multi,setMulti ] = useState([]);

//current date
const today = new Date();

const[date,setDate] = useState({
  year: today.getFullYear(),
  month: today.getMonth() + 1,
  day: today.getDate()
})
  const handleChange= event=>{
    const newdate = event.target.value;
    

    setDate(newdate );
  
  }
  console.log(date);

//multiple access 
// const requestOne = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date.year}-${date.month}-${date.day}`;
// const requestTwo = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date.year}-${date.month}-${date.day-1}`;
// const requestThree = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date.year}-${date.month}-${date.day-2}`;

    useEffect(()=>{

        axios
        // .all([requestOne,requestTwo,requestThree])

        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date.year}-${date.month}-${date.day}`)

        
       .then(resp=>{
            setData(resp.data);
           })
       
        // .then(axios.spread((...responses)=>{
        //   const resp1 = responses.data[0];
        //   const resp2 = responses.data[1];
        //   const resp3 = responses.data[2];
        //   setMulti(responses)
        //   setData(responses.data);
        //   console.log(responses.data);

        // }))
            
           
           
           
          
        
        .catch(err=>{
            console.log('something wrong ', err)
        })


    },[date]);

// print an array of years [2010...2020]
    // const arr= ()=>{
    //   let ar = [];
    //   let a = 2010;
    //   for(let i=0; i<=10;i++){
    //     ar[i]=a;
    //     a++
    //   }
      
    //   return ar;
    // }
    // const newAr = arr();

    // const selection = ()=>{
    //   newAr.map((el,index)=>{

    //     return <option key= {index} value={el}> {el} </option>}
    //     )};
  


  return (
   
    <div className="App">

    
      <select onChange={handleChange}>
        <option onFocus>Select a date</option>      
        <option  value='2020-01-01'>Jan 01 2020</option>
        <option value='2020-02-01'>Feb 01 2020</option>
        <option value='2020-03-01'>March 01 2020</option>
        <option value='2020-04-01'>Apr 01 2020</option>
        <option value='2020-05-01'>May 01 2020</option>
        <option value='2020-06-01'>Jun 01 2020</option>
      </select>
     
      
          <Card image={data.url} date={data.date} explanation={data.explanation}/>
      
     
    </div>
   
  );
}
  export default PhotoList