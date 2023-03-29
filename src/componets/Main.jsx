import React from 'react'

// Css
import './css/main.css'


// Imagem
import Shaka from '../img/shaka_page_02.png'

// Icons
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'


const Main = () => {
  return (
    <div className='main-main'>

      <div className='main-left'>
        <div className='main-title'>
          <h2>Shaka Arayashiki</h2>
        </div>
          <p>Shaka de Virgem é o Cavaleiro de Ouro de Virgem. Considerado como a reencarnação de Buda. <br/> 
          Conhecido como o Homem Mais Próximo de Deus. Seu poder materializa espíritos malignos e, em meio a múltiplas ilusões, lança-os sobre o inimigo. </p>
        
      </div>

      <div className='main-center'>
        <img src={Shaka} alt="" className='main-img' />
      </div>

      <div className='main-right'>
        <ul>
          <li><i><FaInstagram className='icons' /></i></li>
          <li><i><FaTwitter className='icons' /></i></li>
          <li><i><FaFacebook className='icons' /></i></li>
          <li><i><FaYoutube className='icons' /></i></li>
        </ul>
      </div>
    </div>
  )
}

export default Main
