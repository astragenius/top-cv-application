import React from 'react'

function Education() {
  return (
    <section>
        <form>
                <h3>Education</h3>

                
                <input placeholder='School Name' type="text" name="school" id="" />

              
                <input placeholder='City' type="text" name="city" id="" />

               
                <input placeholder='Degree' type="text" name="degree" id="" />

                
                <input placeholder='Subject' type="text" name="subject" id="" />

                 <label htmlFor="">From:</label>
                 <input type="date" name="from" id="" />

                 <label htmlFor="">To:</label>
                 <input type="date" name="to" id="" />

                 <button className='add__btn' type="submit">Add</button>
                 <button className='del__btn'>Delete</button> 
        </form>
    </section>
  )
}

export default Education