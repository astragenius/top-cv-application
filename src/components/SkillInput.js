import React from 'react'

function SkillInput() {
  return (
    <section>
        <form>
            <h3>Skills</h3>
            {/* <label>Add Skill</label> */}
            <input type="text" placeholder='Add Skill'/>

            <button className='add__btn' type="submit">Add</button>

        </form>
    </section>
  )
}

export default SkillInput