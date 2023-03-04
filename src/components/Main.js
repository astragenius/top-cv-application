import React from 'react'
import PersonalInput from './PersonalInput'
import { useState } from 'react'
import SkillInput from './SkillInput'
import Education from './Education'
import Experience from './Experience'

import CVPreview from './CVPreview'

function Main() {

    const [value, setValue] = useState({})
    const [skill, setSkill] = useState([])
    const [educationInfo, setEducationInfo] = useState({})

    const getPersoInfo = (value) => {
       
        setValue(value)
    }
    const getSkills = (value) => {
      setSkill([...skill, value])
      //console.log(value)
    }
    const getEducation = (value) => {
      setEducationInfo(value)
    }
    

  return (
    <main className='main'>
        <section className='input__section'>

          <PersonalInput getInfo={getPersoInfo}/>
          <SkillInput getSkill={getSkills}/>
          <Education getEducation={getEducation}/>
          <Experience/>
        </section>

        <section className='preview__section'>
         <CVPreview data={value} skills={skill} educationInfo={educationInfo}/>

        </section>
       
    </main>
  )
}

export default Main