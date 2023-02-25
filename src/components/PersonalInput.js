import React from 'react'
import { useState } from 'react'


function PersonalInput(props) {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [about, setAbout] = useState('')
    
   const sendInfo = props.getInfo;

  const getPersoInfo = (e) => {
    e.preventDefault()
    const persoInfo = {name, lastName, phoneNumber, email, about}

    
    sendInfo(persoInfo)
  } 
    
  return (
    <div>
        <form onSubmit={getPersoInfo}>
            <h3>Personal Details</h3>
            <div className='inputContainer'>
                <label>First Name</label>
                <input type="text" name="FirstName" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='inputContainer'>
                <label>Last Name</label>
                <input type="text" name="LastName" onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className='inputContainer'>
                <label>Phone Number</label>
                <input type="tel" name="PnoneNumber" onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>
            <div className='inputContainer'>
                <label>Email</label>
                <input type="email" name="Email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='inputContainer'>

                <label htmlFor="">About Me:</label>
                <textarea name="AboutMe" onChange={(e) => setAbout(e.target.value)}></textarea>
            </div>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default PersonalInput