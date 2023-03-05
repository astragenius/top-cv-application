import React from 'react'
import EducationContent from './EducationContent'



function PreviewEducation(props) {

  const data = props.data
  return (
    <section>
      <div >

      <h4 className='title__preview'>Education</h4>
      </div>
      <div className="education__container">
        
          {data.map(el => <EducationContent data={el}/>)}




      </div>
    </section>
  )
}

export default PreviewEducation