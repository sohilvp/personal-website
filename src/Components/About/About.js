import React from 'react'
import myimg from '../../passet/Group 50.png'
import './about.css'
const About = () => {
  return (
    <React.Fragment>

      <div className='about-title-container' id='about'>
      <h1><span>#</span>About-Me</h1>
    </div>
    <div className="about-container">
      <div className="about-left"><p>Hello, i'm Sohil</p><br/><br/>
      <p>I'm a self-taught MERN stack developer based in kerala,india.I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p><br/><br/>
      <p>Transforming my creativity and knowledge into a website has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks. </p></div>
      <div className="about-right"><img src={myimg} alt="" /></div>
    </div>
    </React.Fragment>
    
  )
}

export default About