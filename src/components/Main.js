import React from 'react'
import PersonalInput from './PersonalInput'
import { useState } from 'react'
import SkillInput from './SkillInput'
import Education from './Education'
import Experience from './Experience'

import CVPreview from './CVPreview'

function Main() {

    const [value, setValue] = useState({})

    const getPersoInfo = (value) => {
       
        setValue(value)
    }
    const getSkill = (value) => {

    }
    

  return (
    <main className='main'>
        <section className='input__section'>

          <PersonalInput getInfo={getPersoInfo}/>
          <SkillInput getSkill={getSkill}/>
          <Education/>
          <Experience/>
        </section>

        <section className='preview__section'>
         <CVPreview data={value}/>
        </section>
       
    </main>
  )
}

export default Main