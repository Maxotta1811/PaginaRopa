import React from 'react'
import imglogoheader from '../images/logoheader.png'
import "../styles/Header.css"
const Header = () => {
  return (
    <div>
      <div className='container'>
        <img src={imglogoheader} alt="Niñas Noriega" />
      </div>
    </div>
  )
}

export default Header;