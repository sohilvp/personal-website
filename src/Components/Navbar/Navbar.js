import React, { useState } from 'react'
import {IoCloseSharp} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import './navbar.css'


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className='nav-container'>
      <div className="logo">dev.SOH<span>I</span>L</div>
      
      <div className="nav-link-container">
      <span className=" toggle">
          {menu ? (
            <IoCloseSharp className='icon' onClick={() => setMenu(!menu)} />
          ) : (
            <GiHamburgerMenu className='icon' onClick={() => setMenu(!menu)} />
          )}
        </span>
      <div className={menu ? "mobile_links" : 'nav-links'}>
        <ul>
          <li onClick={()=>setMenu(false)}><span>#</span><a href="#home">home</a></li>
          <li onClick={()=>setMenu(false)}><span>#</span><a href="#project">Project</a></li>
          <li onClick={()=>setMenu(false)}><span>#</span><a href="#skills">Skills</a></li>
          <li onClick={()=>setMenu(false)}><span>#</span><a href="#about">About-me</a></li>
          <li onClick={()=>setMenu(false)}><span>#</span><a href="#contact">Contact</a></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar