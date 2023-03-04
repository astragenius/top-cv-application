import React from 'react'

function PreviewDescription(props) {


  return (
    <section>
        <h4 className="title__preview">Description</h4>
        <p>
          {props.data.about}
        </p>
        </section>
  )
}

export default PreviewDescription