import moment from 'moment/moment';
import React from 'react'

function PreviewExperience(props) {

  const {job, company, dateFrom, dateTo} = props.data
  //console.log(props.data)
  
  return (
    <section>
      <div >

          <h4 className='title__preview'>Experience</h4>
      </div>

      <div className='experience__container'>
            <div className='experience__content'>
              <div className='experience__date'>
                <p><b>{moment(dateFrom).format('YYYY')} - {moment(dateTo).format('YYYY')}</b></p>
              </div>
              <div className='experience__description'>
                <p>{job}</p>
                <p>{company}</p>
              </div>
            </div>

      </div>


      </section>
  )
}


export default PreviewExperience