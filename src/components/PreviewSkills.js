import React from 'react'

function PreviewSkills(props) {

  console.log(props.data.skill)
  return (
    <section>
      <div >
          <h4 className='title__preview'>Skills</h4>
          <ul className='skills__content'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>SASS</li>
            <li>REACT.js</li>
            <li>Webpack</li>
          </ul>
      </div>

      </section>
  )
}

export default PreviewSkills