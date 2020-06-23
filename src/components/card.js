import React from 'react';


const Card = props=>{

    return (

        <div className='card'>
            <h1>Today <span > <p>{props.date}</p></span> Nasa Photo</h1>
            
            <img src= {props.image} alt=''/>
            
            <p>{props.explanation}</p>
    

        </div>

    )
}
export default Card