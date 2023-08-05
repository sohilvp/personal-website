import React from 'react'
import {FaRegCopyright} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {TfiLinkedin} from 'react-icons/tfi'
import footlogo from '../../asset/StyleOutline.svg'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-left">
        <img src={footlogo} alt="" />
        <p>dev.SOH<span>I</span>L</p>
      </div>
      <div className="footer-right">
        <div className="footer-row">
        <h4><a href="https://linkedin.com/in/sohilvp" target='_blank' rel='noreferrer'><TfiLinkedin/></a></h4>
        <h4><a href="https://github.com/sohilvp" target='_blank' rel='noreferrer'><FiGithub/> </a></h4>
        </div>
       <p><FaRegCopyright/> copyright 2023 | Made by Sohil</p>
      </div>
    </div>
  )
}

export default Footer