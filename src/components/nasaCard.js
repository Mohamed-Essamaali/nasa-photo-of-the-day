import React from 'react'
import {Card,CardImg,CardSubtitle,CardTitle,CardText} from 'reactstrap'


const NasaCard = props=>{

console.log(props)


    return(
        <div className='container'>
       {/*'https://images.unsplash.com/photo-1598389332468-2591a323393e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' */}
        <Card>
            <CardImg src={props.image} alt={props.title}/>
            
            
            

            <CardTitle>Title: {props.title}</CardTitle>
            <CardSubtitle> Date: {props.date}</CardSubtitle>
           
            <CardText>Explanation: {props.explanation}</CardText>            

         </Card>
        </div>
    )
}
export default NasaCard