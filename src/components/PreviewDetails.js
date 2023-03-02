import React from 'react'

function PreviewDetails(props) {
    const {phoneNumber, email, image} = props.data
    console.log(image)
  return (
    <section className='preview__details'>
        <div className='title__preview'>

        <h4>Personal Details</h4>
        </div>
        <div>
            <p>Phone Number</p>
            <p>{phoneNumber}</p>
        </div>
        <div>
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