import React from 'react'
import './hero.css'
import heroimg from '../../asset/Group 46.png'
import colorp from '../../asset/Rectangle 27.png'

const Hero = () => {
  return (
    <div className='hero-container' id='home'>
      <div className="hero-text">
        <h1>
          i'm a <span> web designer</span> and <span>front-end developer</span>
        </h1>
        <p>i crafts responsive websites where technologies meet creativity</p>
        <button className='button button-hero'><a href="https://linkedin.com/in/sohilvp" target='_blank' rel='noreferrer'>Contact-me</a></button>
      </div>
      <div className="hero-image">
        <img src={heroimg} alt="" />
        <div className="current-work">
          <p><img src={colorp} alt="" />  currently working on E-com website</p>
        </div>
      </div>

    </div>
  )
}

export default Hero