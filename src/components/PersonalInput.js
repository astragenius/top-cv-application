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
    <section>
        <form onSubmit={getPersoInfo}>
            <h3>Personal Details</h3>
            <div className='inputContainer'>
                <input placeholder='First Name' type="text" name="FirstName" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='inputContainer'>
                <input placeholder='Last Name' type="text" name="LastName" onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className='inputContainer'>
                
                <input placeholder='Phone Number' type="tel" name="PnoneNumber" onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>
            <div className='inputContainer'>
               
                <input placeholder='Email adress' type="email" name="Email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='inputContainer'>

                <label htmlFor="">About Me:</label>
                <textarea name="AboutMe" onChange={(e) => setAbout(e.target.value)}></textarea>
            </div>

            <button className='add__btn' type='submit'>Add</button>
            <button className='del__btn' type='button'>Delete</button>
        </form>
    </section>
  )
}

export default PersonalInput