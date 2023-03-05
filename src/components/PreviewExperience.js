
import React from 'react'
import ExperienceContent from './ExperienceContent';


function PreviewExperience(props) {

  
  
  const data = props.data;
  return (
    <section>
      <div >

          <h4 className='title__preview'>Experience</h4>
      </div>

      <div className='experience__container'>
        
        {data.map(el => {
        return <ExperienceContent data={el}/>
        })}
            

      </div>


      </section>
  )
}


export default PreviewExperience