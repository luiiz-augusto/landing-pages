import React from 'react'

// Css
import './css/footer.css'

// Imagem
import Lotus from '../img/lotus_01.png'

const Footer = () => {
  return (
    <div className="footer-main">
      <img src={Lotus} alt="" className='footer-img'/>
    </div>
  )
}

export default Footer
