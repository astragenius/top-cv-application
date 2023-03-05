import React from 'react'
import { useState } from 'react'


function PersonalInput(props) {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [about, setAbout] = useState('')
    const [title, setTitle] = useState('')
    const [street, setStreet] = useState('')
    const [streetNumber, setStreetNumber] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [city, setCity] = useState('')

   const sendInfo = props.getInfo;

  const getPersoInfo = (e) => {
    e.preventDefault()
    const persoInfo = {name, lastName, title, phoneNumber, email, about, street, streetNumber, zipCode, city}

    
    sendInfo(persoInfo)
  } 
    
  return (
    <section>
        <form onSubmit={getPersoInfo}>
            <h3>Personal Details</h3>
            <div className='inputContainer'>
                <input 
                placeholder='First Name' 
                type="text" 
                name="FirstName" 
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='inputContainer'>
                <input 
                placeholder='Last Name' 
                type="text" 
                name="LastName" 
                onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className='inputContainer'>
                
                <input 
                placeholder='Currend Job title' 
                type="text" 
                name="jobtitle" 
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='inputContainer'>
                <input 
                placeholder='Phone Number' 
                type="tel" 
                name="PnoneNumber" 
                onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <div className="inputContainer">
               <input
               placeholder='Street' 
               type="text" 
               name="street"
               onChange={(e) => setStreet(e.target.value)} 
               />
            </div>
            <div className='inputContainer'>
                <input
                placeholder='Street Number' 
                type="text" 
                name="streetNumber" 
                onChange={(e) => setStreetNumber(e.target.value)}
                />
            </div>
            <div className="inputContainer">
                <input 
                type="text"
                placeholder='Zip code'
                onChange={(e) => setZipCode(e.target.value)} 
                />
            </div>
            <div className="inputContainer">
                <input
                placeholder='City' 
                type="text" 
                onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div className='inputContainer'>
               
                <input 
                placeholder='Email adress' 
                type="email" 
                name="Email" 
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='inputContainer'>
                <textarea className='inputContainer'
                name="AboutMe" 
                placeholder='Description'
                onChange={(e) => setAbout(e.target.value)}
                ></textarea>
            </div>

            <button className='add__btn' type='submit'>Add</button>
         
        </form>
    </section>
  )
}

export default PersonalInput