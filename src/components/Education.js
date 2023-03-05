import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function Education(props) {

  const [schoolName, setSchoolName] = useState('');
  const [city, setCity] = useState('');
  const [degree, setDegree] = useState('');
  const [subject, setSubject] = useState('');
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const setEducation = props.getEducation
  const delItem = props.delItem;
  

  const getInput = (e) => {
    e.preventDefault();
    const eduInfo = {id: uuidv4(), schoolName, city, degree, subject, from, to}
    setEducation(eduInfo)
    setSchoolName('')
    setCity('')
    setDegree('')
    setSubject('')
    setFrom('')
    setTo('')

  }
 

  return (
    <section>
        <form onSubmit={getInput}>
                <h3>Education</h3>

                
                <input 
                placeholder='School Name' 
                type="text" 
                name="school" 
                value={schoolName}
                required
                onChange={(e) => {setSchoolName(e.target.value)}}
                />

              
                <input
                placeholder='City' 
                type="text" 
                name="city" 
                value={city}
                required
                onChange={(e) => {setCity(e.target.value)}} 
                />

               
                <input 
                placeholder='Degree' 
                type="text" 
                name="degree" 
                value={degree}
                required
                onChange={(e) => {setDegree(e.target.value)}} 
                />

                
                <input 
                placeholder='Subject' 
                type="text" 
                name="subject" 
                value={subject}
                required
                onChange={(e) => {setSubject(e.target.value)}}
                />

                 <label htmlFor="">From:</label>
                 <input 
                 type="date" 
                 name="from" 
                 value={from}
                 required
                 onChange={(e) => {setFrom(e.target.value)}} 
                 />

                 <label htmlFor="">To:</label>
                 <input 
                 type="date" 
                 name="to" 
                 value={to}
                 onChange={(e) => {setTo(e.target.value)}} 
                 />
                 

                 <button className='add__btn' type="submit">Add</button>
                 <button 
                 className='del__btn' 
                 onClick={() => {delItem('edu')}}
                 >Delete
                 </button> 
        </form>
    </section>
  )
}

export default Education