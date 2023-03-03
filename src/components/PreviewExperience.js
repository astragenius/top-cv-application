import React from 'react'

function PreviewExperience() {
  return (
    <section>
      <div >

          <h4 className='title__preview'>Experience</h4>
      </div>

      <div className='experience__container'>
            <div className='experience__content'>
              <div>
                <p>2015 - Present</p>
              </div>
              <div>
                <p>Senior Web Developer</p>
                <p>Facebook Inc. Menlo Park</p>
              </div>
            </div>



            <div className='experience__content'>
              <div>
                <p>2012 - 2015</p>
              </div>
              <div>
                <p>Junior Web Developer</p>
                <p>Tesla Inc</p>
              </div>
            </div>


            <div className='experience__content'>
              <div>
                <p>2010 - 2012</p>
              </div>
              <div>
                <p>UI / UX Designer</p>
                <p>Google LLC, Mountain View</p>
              </div>
            </div>

      </div>


      </section>
  )
}

export default PreviewExperience