import React from 'react'

function PreviewDetails(props) {
    const {phoneNumber, email, image} = props.data
    
  return (
    <section className='preview__details'>
        <div>

        <h4  className='title__preview'>Personal Details</h4>
        </div>
        <div className='details__content'>
            <p>Phone Number</p>
            <p>{phoneNumber}</p>
        </div>
        <div className='details__content'>
            <p>Email:</p>
            <p>{email}</p>
        </div>
        <div>
            <img src={image} alt="" />
        </div>
    </section>
  )
}

export default PreviewDetails