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

    const delItem = (subject) => {

      if(subject === 'edu') {
        
        
        setEducationInfo(educationInfo.slice(0, -1))
       
      }else if(subject === 'exp') {
        console.log('test')
        setExperienceInfo(experienceInfo.slice(0, -1))
        console.log(experienceInfo)
      }
    }
    

  return (
    <main className='main'>
        <section className='input__section'>

          <PersonalInput getInfo={getPersoInfo}/>
          
          <Education getEducation={getEducation} delItem={delItem}/>
          <Experience getExperience={getExperience} delItem={delItem}/>
        </section>

        <section className='preview__section'>
         <CVPreview data={value} educationInfo={educationInfo} experienceInfo={experienceInfo}/>

        </section>
       
    </main>
  )
}

export default Main