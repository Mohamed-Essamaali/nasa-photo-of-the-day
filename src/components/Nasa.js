import React, { useEffect, useState } from 'react'
import axios from 'axios'


const NasaPictures=()=>{
    const[picture,setPicture]=useState([])

    useEffect(()=>{
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=ZYdWTP8IYjL9RqMhunZUa3jfb5vfp1q48X7TAc8Q')
        .then(res=>{
            console.log(res)
            setPicture(res.data)
        })
        .catch(err=>{
            console.log('somthing wrong',err)
        })
    },[])


    return(
            <div>
                <p>Hello</p>

            </div>


    )
}
export default NasaPictures