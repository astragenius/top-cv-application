import React from 'react'
import PreviewDescription from './PreviewDescription'
import PreviewDetails from './PreviewDetails'
import PreviewEducation from './PreviewEducation'
import PreviewExperience from './PreviewExperience'
import PreviewHeader from './PreviewHeader'
import PreviewSkills from './PreviewSkills'

function CVPreview(props) {

    
    const {name, lastName, title} = props.data
    const {phoneNumber, email, image, about} = props.data
    const {skill} = props.skills
    const {schoolName, city, degree, subject} = props.educationInfo
   

    const headerData = {name, lastName, title}
    const detailsData = {phoneNumber, email, image}
    const aboutMeData = {about}
    const skillsData = {skill}
    const educationData = {schoolName, city, degree, subject}


   


  

    
    
    
  return (
    <section className='cvpreview__section'>

        <PreviewHeader data={headerData}/>
        <PreviewDetails data={detailsData}/>
        <div className='preview__main'>
          <PreviewDescription data={aboutMeData}/>
          <PreviewSkills data={skillsData}/>
          <PreviewExperience/>
          <PreviewEducation data={educationData}/>
        </div>

    </section>
  )
}

export default CVPreview