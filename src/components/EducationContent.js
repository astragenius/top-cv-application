import React from 'react'
import moment from 'moment/moment';


function EducationContent(props) {

    const {schoolName, city, degree, subject, from, to} = props.data
  return (
    
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
  )
}

export default EducationContent