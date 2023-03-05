import React from 'react'
import { BsTwitter, BsGithub } from 'react-icons/bs';

function Footer() {
  return (
    <footer className='footer'>
        <p></p>
        <div className='footer__links'>

            <a href="https://github.com/astragenius"> <BsGithub className='icon'/> Matthias/Astragenius</a>
        </div>
        <div className='footer__links'>

                <a href="https://twitter.com/AstraKarl"><BsTwitter className='icon'/> My Twitter</a>
        </div>
    </footer>
  )
}

export default Footer