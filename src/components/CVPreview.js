import React from 'react'
import PreviewDescription from './PreviewDescription'
import PreviewDetails from './PreviewDetails'
import PreviewEducation from './PreviewEducation'
import PreviewExperience from './PreviewExperience'
import PreviewHeader from './PreviewHeader'
import PreviewSkills from './PreviewSkills'

function CVPreview(props) {

    
    const {name, lastName, title} = props.data
    const {phoneNumber, email, image} = props.data
    const headerData = {name, lastName, title}
    const detailsData = {phoneNumber, email, image}
    
    
    
  return (
    <section className='cvpreview__section'>

        <PreviewHeader data={headerData}/>
        <PreviewDetails data={detailsData}/>
        <div className='preview__main'>
          <PreviewDescription/>
          <PreviewSkills/>
          <PreviewExperience/>
          <PreviewEducation/>
        </div>

    </section>
  )
}

export default CVPreview