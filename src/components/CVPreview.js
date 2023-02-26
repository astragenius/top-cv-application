import React from 'react'
import PreviewDetails from './PreviewDetails'
import PreviewHeader from './PreviewHeader'

function CVPreview(props) {

    
    const {name, lastName, title} = props.data
    const {phoneNumber, email, image} = props.data
    const headerData = {name, lastName, title}
    const detailsData = {phoneNumber, email, image}
    
    
    
  return (
    <section className='cvpreview__section'>

        <PreviewHeader data={headerData}/>
        <PreviewDetails data={detailsData}/>

    </section>
  )
}

export default CVPreview