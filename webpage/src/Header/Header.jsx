import React from 'react'
import logo from '../assets/logo_dark.webp'
import Button from '../usable-component/Button'

const Header = () => {
   function Mobile_nav(){
    document.getElementById("navlinks").classList.toggle("active");
   }
  return (
    <>
      <div className='header-container'>
        <div className='logo'>
            <img src={logo}></img>
        </div>
        <nav className='headnav'>
           <ul className='navlinks' id='navlinks'>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>ROADMAP</li>
              <li>PAGES</li>
              <li>BLOG</li>
              <li>CONTACT</li>
           </ul>
        </nav>
        <button class="hamburger" id="hamburger" onClick={Mobile_nav}>
            <i class="fas fa-bars"></i>
        </button>
        <Button/>
      </div>
    </>
  )
}

export default Header
