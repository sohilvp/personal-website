import React from 'react'
import {FiMail,FiGithub} from 'react-icons/fi'
import frame from '../../asset/Group 36.png'
import {TfiLinkedin} from 'react-icons/tfi'
import './contact.css'
const Contact = () => {
  return (
    <div><div className='about-title-container' id='contact'>
    <h1><span>#</span>Contacts</h1>
    </div>
    <div className="contact-container">
      <div className="contact-left">
      <img src={frame} alt="" />
      </div>
      <div className="contact-right">
        <h3><FiMail/>sohilvp1@gmail.com</h3>
        <h3><TfiLinkedin/><a href="https://linkedin.com/in/sohilvp" target='_blank' rel='noreferrer'>sohilvp </a></h3>
        <h3><FiGithub/><a href="https://github.com/sohilvp" target='_blank' rel='noreferrer'>sohilvp </a></h3>
        

      </div>
      
  </div></div>
  )
}

export default Contact