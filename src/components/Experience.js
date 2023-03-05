import React from 'react'
import { useState } from 'react'

function Experience(props) {

  const [job, setJob] = useState('')
  const [company, setCompany] = useState('')
  const [dateFrom, setFrom] = useState('')
  const [dateTo, setTo] = useState('')

  const setExperience = props.getExperience
  const getInput = (e) => {
    e.preventDefault()
    const experienceInput = {job, company, dateFrom, dateTo}
    setExperience(experienceInput)
  } 

  return (
    <section>
        <form onSubmit={getInput}>
            <h3>Work Experience</h3>
            
         
            <input 
            placeholder='Job Position' 
            type="text" 
            name="job" 
            id="" 
            onChange={(e) => {setJob(e.target.value)}}
            />

           
            <input
             placeholder='Company Name' 
             type="text" 
             name="company" 
             id=""
             onChange={(e) => {setCompany(e.target.value)}} 
             />

            <label htmlFor="from">From:</label>
            <input 
            type="date" 
            name="from" 
            id=""
            onChange={(e) => {setFrom(e.target.value)}} 
            />

            <label htmlFor="to">To:</label>
            <input 
            type="date" 
            name="to" 
            id=""
            onChange={(e) => {setTo(e.target.value)}} 
            />

            <button className='add__btn' type="submit">Add</button>
            <button className='del__btn'>Delete</button>

        </form>
    </section>
  )
}

export default Experience