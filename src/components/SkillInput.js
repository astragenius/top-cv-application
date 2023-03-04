import React, { useState } from 'react'

function SkillInput(props) {

  const [skill, setSkill] = useState('')
  const sendSkill = props.getSkill

  const getSkill = (e) => {
    e.preventDefault()
    const skills = [...skill]
    sendSkill(skills)
  }


  return (
    <section>
        <form onSubmit={getSkill}>
            <h3>Skills</h3>
            {/* <label>Add Skill</label> */}
            <input 
            type="text" 
            placeholder='Add Skill'
            onChange={(e) => setSkill(e.target.value)}
            />

            <button className='add__btn' type="submit">Add</button>
            <button className='del__btn' type="submit">Delete</button>

        </form>
    </section>
  )
}

export default SkillInput