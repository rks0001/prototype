import React from 'react'
import './socials.css'
import {FaTwitter, FaLinkedin, FaDiscord, FaInstagram, FaMedium} from 'react-icons/fa'

const Socials = () => {
  return (
    <>
      <div className='sticky-social'>
        <ul className='social'>
          <li className='twitter'>
            <a href='https://twitter.com/wealthisle'>
              <FaTwitter color='black' size='1.5rem' />
            </a>
          </li>
          <li className='insta'>
            <a href='https://twitter.com/wealthisle'>
              <FaInstagram color='black' size='1.5rem' />
            </a>
          </li>
          <li className='dis'>
            <a href='https://twitter.com/wealthisle'>
              <FaDiscord color='black' size='1.5rem' />
            </a>
          </li>

          <li className='link'>
            <a href='https://twitter.com/wealthisle'>
              <FaLinkedin color='black' size='1.5rem' />
            </a>
          </li>
          <li className='med'>
            <a href='https://twitter.com/wealthisle'>
              <FaMedium color='black' size='1.5rem' />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Socials