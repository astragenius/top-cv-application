import React from 'react'

function PreviewHeader(props) {

    const {name, lastName, title} = props.data
    
  return (
    <section>
        <header className='preview__header'>
            <h1>{name} {lastName}</h1>
            <h2>{title}</h2>
        </header>
    </section>
  )
}

export default PreviewHeader