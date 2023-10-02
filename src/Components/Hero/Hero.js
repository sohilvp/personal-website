import React from 'react'
import './hero.css'
import heroimg from '../../asset/Group 46.png'
import colorp from '../../asset/Rectangle 27.png'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className='hero-container' id='home'>
      <div className="hero-text">
        <motion.h1
        initial={{opacity:0,x:-50}}
        animate={{opacity:1,x:0}}
        transition={{delay:0.05,duration:.8}}
        >
          i'm a <span> web designer</span> and <span>front-end developer</span>
        </motion.h1>
        <motion.p initial={{opacity:0,x:-50}}
        animate={{opacity:1,x:0}}
        transition={{delay:0.9,duration:1}}>i crafts responsive websites where technologies meet creativity</motion.p>
        <motion.button  initial={{opacity:0}}
        animate={{opacity:1}} transition={{delay:.95 ,duration:.5}} className='button button-hero'><a href="https://linkedin.com/in/sohilvp" target='_blank' rel='noreferrer'>Contact-me</a></motion.button>
      </div>
      <motion.div initial={{opacity:0,y:70}}
        animate={{opacity:1,y:0}}
        transition={{duration:1, delay:0.1}} className="hero-image">
        <img src={heroimg} alt="" />
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1, delay:1}}  className="current-work">
          <p><img  src={colorp} alt="" />  currently working on E-com website</p>
        </motion.div>
      </motion.div>

    </div>
  )
}

export default Hero