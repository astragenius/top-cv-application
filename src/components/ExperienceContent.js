import React from 'react'
import moment from 'moment/moment';

function ExperienceContent(props) {

    const {job, company, dateFrom, dateTo} = props.data

  return (

    <div className='experience__content'>
              <div className='experience__date'>
                <p><b>{moment(dateFrom).format('YYYY')} - {moment(dateTo).format('YYYY')}</b></p>
              </div>
              <div className='experience__description'>
                <p>{job}</p>
                <p>{company}</p>
              </div>
    </div>
    
  )
}

export default ExperienceContent