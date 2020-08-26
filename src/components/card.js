import React from 'react'


const Card = props=>{

console.log(props)


    return(
        <div className='card'>
            <img src={props.image} alt = {props.title}/>
            <h3>Title: {props.title}</h3>
            <p>Date: {props.date}</p>
            <p>Explanation: {props.explanation}</p>            

        </div>
    )
}
export default Card