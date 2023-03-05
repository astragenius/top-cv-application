import React, { useState } from 'react'

function Education(props) {

  const [schoolName, setSchoolName] = useState('');
  const [city, setCity] = useState('');
  const [degree, setDegree] = useState('');
  const [subject, setSubject] = useState('');
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const setEducation = props.getEducation
  

  const getInput = (e) => {
    e.preventDefault();
    const eduInfo = {schoolName, city, degree, subject, from, to}
    setEducation(eduInfo)

  }

  return (
    <section>
        <form onSubmit={getInput}>
                <h3>Education</h3>

                
                <input 
                placeholder='School Name' 
                type="text" 
                name="school" 
                id=""
                onChange={(e) => {setSchoolName(e.target.value)}}
                />

              
                <input
                placeholder='City' 
                type="text" 
                name="city" 
                id=""
                onChange={(e) => {setCity(e.target.value)}} 
                />

               
                <input 
                placeholder='Degree' 
                type="text" 
                name="degree" 
                id=""
                onChange={(e) => {setDegree(e.target.value)}} 
                />

                
                <input 
                placeholder='Subject' 
                type="text" 
                name="subject" 
                id="" 
                onChange={(e) => {setSubject(e.target.value)}}
                />

                 <label htmlFor="">From:</label>
                 <input 
                 type="date" 
                 name="from" 
                 id=""
                 onChange={(e) => {setFrom(e.target.value)}} 
                 />

                 <label htmlFor="">To:</label>
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

export default Education