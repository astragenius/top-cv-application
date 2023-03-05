import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function Experience(props) {

  const [job, setJob] = useState('')
  const [company, setCompany] = useState('')
  const [dateFrom, setFrom] = useState('')
  const [dateTo, setTo] = useState('')

  const setExperience = props.getExperience
  const delItem = props.delItem
  const getInput = (e) => {
    e.preventDefault()
    const experienceInput = {id: uuidv4(), job, company, dateFrom, dateTo}
    setExperience(experienceInput)
    setJob('')
    setCompany('')
    setFrom('')
    setTo('')
  } 

  return (
    <section>
        <form onSubmit={getInput}>
            <h3>Work Experience</h3>
            
         
            <input 
            placeholder='Job Position' 
            type="text" 
            name="job" 
            value={job}
            required 
            onChange={(e) => {setJob(e.target.value)}}
            />

           
            <input
             placeholder='Company Name' 
             type="text" 
             name="company" 
             value={company}
             required
             onChange={(e) => {setCompany(e.target.value)}} 
             />

            <label htmlFor="from">From:</label>
            <input 
            type="date" 
            name="from" 
            value={dateFrom}
            required
            onChange={(e) => {setFrom(e.target.value)}} 
            />

            <label htmlFor="to">To:</label>
            <input 
            type="date" 
            name="to" 
            value={dateTo}
            required
            onChange={(e) => {setTo(e.target.value)}} 
            />

            <button className='add__btn' type="submit">Add</button>
            <button className='del__btn' onClick={() => {delItem('exp')}}>Delete</button>

        </form>
    </section>
  )
}

export default Experience