import React from 'react';

// Css
import './css/nav.css';

// Icons 
import {FaHome} from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {GoSearch} from 'react-icons/go'

// Imagem
import Logo from '../img/signo_virge.png'

const Nav = () => {
  return (
    <div className='nav-main'>
      <img src={Logo} alt="Logo do Landing Page - Signo de Virgem" className='img-logo'/>
      <div className='all-icons'>
        <ul>
            <li><i><FaHome className='icons' /></i></li>
            <li><i><AiFillSetting className='icons' /></i></li>
            <li><i><FaUserCircle className='icons' /></i></li>
            <li><i><GoSearch className='icons' /></i></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;


