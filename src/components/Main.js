import React from 'react'
import PersonalInput from './PersonalInput'
import { useState } from 'react'
import Education from './Education'
import Experience from './Experience'

import CVPreview from './CVPreview'

function Main() {

    const [value, setValue] = useState({})
   
    const [educationInfo, setEducationInfo] = useState([])
    const [experienceInfo, setExperienceInfo] = useState([])

    const getPersoInfo = (value) => {
       
        setValue(value)
    }
    
    const getEducation = (value) => {
      setEducationInfo([...educationInfo, value])
    }
    const getExperience = (value) => {
      
      setExperienceInfo([...experienceInfo, value])
    }
    

  return (
    <main className='main'>
        <section className='input__section'>

          <PersonalInput getInfo={getPersoInfo}/>
          
          <Education getEducation={getEducation}/>
          <Experience getExperience={getExperience}/>
        </section>

        <section className='preview__section'>
         <CVPreview data={value} educationInfo={educationInfo} experienceInfo={experienceInfo}/>

        </section>
       
    </main>
  )
}

export default Main