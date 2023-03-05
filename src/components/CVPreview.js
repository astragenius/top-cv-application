import React from 'react'
import PreviewDescription from './PreviewDescription'
import PreviewDetails from './PreviewDetails'
import PreviewEducation from './PreviewEducation'
import PreviewExperience from './PreviewExperience'
import PreviewHeader from './PreviewHeader'


function CVPreview(props) {

    
    const {name, lastName, title} = props.data
    const {phoneNumber, email, about, street, streetNumber, zipCode, city} = props.data

   
    const headerData = {name, lastName, title}
    const detailsData = {phoneNumber, email, street, streetNumber, city, zipCode }
    const aboutMeData = {about}
 
    const educationData = props.educationInfo
    const experienceData = props.experienceInfo


   


  

    
    
    
  return (
    <section className='cvpreview__section'>

        <PreviewHeader data={headerData}/>
        <PreviewDetails data={detailsData}/>
        <div className='preview__main'>
          <PreviewDescription data={aboutMeData}/>
          <PreviewExperience data={experienceData}/>
          <PreviewEducation data={educationData}/>
        </div>

    </section>
  )
}

export default CVPreview