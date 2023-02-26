import React from 'react'

function Experience() {
  return (
    <section>
        <form action="">
            <h3>Work Experience</h3>
            
         
            <input placeholder='Job Position' type="text" name="job" id="" />

           
            <input placeholder='Company Name' type="text" name="company" id="" />

            
            <input type="date" name="from" id="" />

            <label htmlFor="">To:</label>
            <input type="date" name="to" id="" />

            <button className='add__btn' type="submit">Add</button>
            <button className='del__btn'>Delete</button>

        </form>
    </section>
  )
}

export default Experience