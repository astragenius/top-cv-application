import React from 'react'
import '../styles/personalInput.css'

function PersonalInput() {
  return (
    <div>
        <form>
            <h3>Personal Details</h3>
            <div className='inputContainer'>
                <label>First Name</label>
                <input type="text" name="FirstName"/>
            </div>
            <div className='inputContainer'>
                <label>Last Name</label>
                <input type="text" name="LastName" id="" />
            </div>
            <div className='inputContainer'>
                <label>Phone Number</label>
                <input type="tel" name="PnoneNumber" id="" />
            </div>
            <div className='inputContainer'>
                <label>Email</label>
                <input type="email" name="Email" id="" />
            </div>
            <div className='inputContainer'>

                <label htmlFor="">About Me:</label>
                <textarea name="AboutMe"></textarea>
            </div>

            
        </form>
    </div>
  )
}

export default PersonalInput