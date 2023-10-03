import React from 'react'
import './project.css'
import {proDta} from '../../projectData'
import {motion} from 'framer-motion'
const Project = () => {
  return (
    <React.Fragment>
    <div className='project-contanier'id='project'>
      <h1><span>#</span>Project</h1>
    
    <div className='projects'>
    {proDta.map((item)=>{
      return (
        <motion.div 
        initial={{opacity:0,y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
        className="single-project">
      
          <div className="thumbnail"><img src={item.image} alt="" /></div>
          
        <p>{item.used}</p>
          <h3>{item.title}</h3>
          <div className="discri">
          <p>{item.discription}</p>
          <button className='button'><a href={item.link} rel="noreferrer" target="_blank" >Live ~~{'>'}</a></button>
          </div>
         
          
        </motion.div>
      )
    })}
    </div>
    </div>
    </React.Fragment>
  )
}

export default Project