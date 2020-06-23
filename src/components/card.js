import React from 'react';


const Card = props=>{

    return (

        <div className='card'>
            <h1>Nasa Photo</h1>
            <p>{props.date}</p>
            <img src= {props.image} alt=''/>
            
            <p>{props.explanation}</p>
    

        </div>

    )
}
export default Card