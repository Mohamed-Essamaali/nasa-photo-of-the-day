import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NasaCard from './nasaCard';
import DateQuery from './dateQuery';
import styled from 'styled-components';

const StyleForm = styled.div`
border:1px solid #e1e1e1;
margin: 1.5% 22%;
padding: 2% ;


`;



const CardList=(props)=>{

    const [card,setCard] = useState({});

    

    const today = new Date();
    
    const[date,setDate] = useState({
      year: today.getFullYear(),
      month: today.getMonth() +1,
      day: today.getDate()-1
    })
   // ZYdWTP8IYjL9RqMhunZUa3jfb5vfp1q48X7TAc8Q
//  console.log('date',date.month)
   const handleChange= e=>{

    setDate(e.target.value);
    console.log(date)
    
}

    // useEffect(()=>{
    //     axios
    //     // .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date.year}-${date.month}-${date.day}`)
    //     .then(res=>{
           
    //         setCard(res.data)
            
    //     })
    //     .catch(err=>{
    //         console.log('somthing wrong',err)
    //     })
    // },[date])


    return(
            <div className='card'>
                <StyleForm>
                     <DateQuery datef = {setDate}/>
                </StyleForm>
                

                <NasaCard image={card.url} title={card.title} date={card.date}
                     explanation = {card.explanation} />
          
                     

        </div>


    )
}
export default CardList