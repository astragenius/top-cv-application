import React from 'react'
import PersonalInput from './PersonalInput'
import { useState } from 'react'

function Main() {

    const [value, setValue] = useState({})

    const getPersoInfo = (value) => {
       
        setValue(value)
    }
    

  return (
    <div>
        <PersonalInput getInfo={getPersoInfo}/>
       
    </div>
  )
}

export default Main