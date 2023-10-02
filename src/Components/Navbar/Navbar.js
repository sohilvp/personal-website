import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {IoCloseSharp} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import './navbar.css'


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className='nav-container'>
      <motion.div initial={{opacity:0,y:-150}}
        animate={{opacity:1,y:0}}  transition={{delay:0.4}} className="logo">dev.SOH<span>I</span>L</motion.div>
      
      <div className="nav-link-container">
      <span className=" toggle">
          {menu ? (
            <IoCloseSharp className='icon' onClick={() => setMenu(!menu)} />
          ) : (
            <GiHamburgerMenu className='icon' onClick={() => setMenu(!menu)} />
          )}
        </span>
      <div className={menu ? "mobile_links" : 'nav-links'}>
        <motion.ul
        initial={{opacity:0,y:-150}}
        animate={{opacity:1,y:0}}
        transition={{delay:.7}}
        >
          <li onClick={()=>setMenu(false)}><span>#</span><a href="#home">home</a></li>
          <li onClick={()=>setMenu(false)}><span>#</span><a href="#project">Project</a></li>
          <li onClick={()=>setMenu(false)}><span>#</span><a href="#skills">Skills</a></li>
          <li onClick={()=>setMenu(false)}><span>#</span><a href="#about">About-me</a></li>
          <li onClick={()=>setMenu(false)}><span>#</span><a href="#contact">Contact</a></li>
        </motion.ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar