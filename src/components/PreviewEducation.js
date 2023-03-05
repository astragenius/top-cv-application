import React from 'react'
import moment from 'moment/moment';

function PreviewEducation(props) {

  const {schoolName, city, degree, subject, from, to} = props.data
  return (
    <section>
      <div >

      <h4 className='title__preview'>Education</h4>
      </div>
      <div className="education__container">
        <div className="education__content">
          <div className='education__date'>
            <p><b>{moment(from).format('YYYY')} - {moment(to).format('YYYY')}</b></p>
          </div>
          <div className='education__description'>
            <p>{schoolName}, {city}</p>
            <p>Degree: {degree}</p>
            <p>Subject: {subject}</p>
          </div>
        </div>





      </div>
    </section>
  )
}

export default PreviewEducation