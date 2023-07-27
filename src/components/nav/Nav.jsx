import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {BiSolidBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareMinus} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [acrtiveNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={acrtiveNav === '#' ? 'active' : ''}><AiOutlineHome /></a> 
      <a href="#about" onClick={() => setActiveNav('#about')} className={acrtiveNav === 'about' ? 'active' : ''}><AiOutlineUserAdd /></a>
      <a href="#experience"  onClick={() => setActiveNav('#experience')} className={acrtiveNav === 'experience' ? 'active' : ''}><BiSolidBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={acrtiveNav === 'services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={acrtiveNav === 'contact' ? 'active' : ''}><BiMessageSquareMinus/></a>

    </nav>
  )
}

export default Nav
