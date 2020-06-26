import React from 'react';
import {Styles} from './Styles';


const Card = props=>{

    return (
        <Styles>
        <div className='card'>
            <h1>Today <span > <p>{props.date}</p></span> Astronomy Pictures</h1>
            
            <img src= {props.image} alt=''/>
            
            <p>{props.explanation}</p>
    

        </div>
        </Styles>
    )
}
export default Card