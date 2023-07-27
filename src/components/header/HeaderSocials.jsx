import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbbleSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/" target="__blank"><BsLinkedin /></a>
        <a href="https://www.github.com/" target="__blank"><FaGithub /></a>
        <a href="https://www.dribble.com/" target="__blank"><FaDribbbleSquare /></a>
      
    </div>
  )
}

export default HeaderSocials
