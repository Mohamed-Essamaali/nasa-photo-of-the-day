import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './card';


const CardList=()=>{

    const [card,setCard] = useState({});

    

    const today = new Date();
    
    const[date,setDate] = useState({
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate()-2
    })
   // ZYdWTP8IYjL9RqMhunZUa3jfb5vfp1q48X7TAc8Q

    useEffect(()=>{
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date.year}-${date.month}-${date.day}`)
        .then(res=>{
           
            setCard(res.data)
            
        })
        .catch(err=>{
            console.log('somthing wrong',err)
        })
    },[date])


    return(
            <div className='card'>
                <Card image={card.url} title={card.title} date={card.date} explanation = {card.explanation}/>
          
                     

        </div>


    )
}
export default CardList