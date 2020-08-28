import React, { useState } from 'react'
import DatePicker from "react-datepicker";

const DateQuery = props=>{
    const[startDate,setStartDate]= useState({startDate:new Date()})
    let {datef} = props

    const handleChange = date=>{
        setStartDate({startDate:date})
        datef(startDate)
        console.log('date in picker',startDate)
    }


    return (
        <>
        {/* <div className='container'>
            <h1>Nasa's pictures</h1>
            <h4>Choose date to display data</h4>
        </div> */}
            <DatePicker
            selected={startDate.startDate}
            onChange={handleChange}/>
</>
       
    )
}
export default DateQuery