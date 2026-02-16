import React from 'react'
import headerlogo from "/src/assets/headerlogo.svg"
import "./Header.css"
function Header() {
  return (
    <div className='header'>
        <img src={headerlogo} alt="headerlogo" className='headerlogo' />
        <button className='headerbutton'>Buy now</button>



    </div>
  )
}

export default Header