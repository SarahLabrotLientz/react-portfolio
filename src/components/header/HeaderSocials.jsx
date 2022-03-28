import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/labrot/" target="_blank" rel="noreferrer"><BsLinkedin/></a> 
        <a href="https://github.com/SarahLabrotLientz?tab=repositories" target="_blank" rel="noreferrer"><FaGithub/></a>
        </div>
  )
}

export default HeaderSocials