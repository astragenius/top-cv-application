import React from 'react'

function PreviewDetails(props) {
    const {phoneNumber, email, street, streetNumber, city, zipCode} = props.data
    
  return (
    <section className='preview__details'>
        <div>

        <h4  className='title__preview'>Personal Details</h4>
        </div>
        <div className='details__content'>
            <p>Adress:</p>
            <p>{street}, {streetNumber}</p> 
            <p>{zipCode}, {city}</p>
            
           
        </div>
        <div className='details__content'>
            <p>Phone Number:</p>
            <p>{phoneNumber}</p>
        </div>
        <div className='details__content'>
            <p>Email:</p>
            <p>{email}</p>
        </div>
       
    </section>
  )
}

export default PreviewDetails