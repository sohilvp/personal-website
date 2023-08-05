import React from 'react'
import './project.css'
import {proDta} from '../../projectData'
const Project = () => {
  return (
    <React.Fragment>
    <div className='project-contanier'id='project'>
      <h1><span>#</span>Project</h1>
    
    <div className='projects'>
    {proDta.map((item)=>{
      return (
        <div className="single-project">
      
          <div className="thumbnail"><img src={item.image} alt="" /></div>
          
        <p>{item.used}</p>
          <h3>{item.title}</h3>
          <div className="discri">
          <p>{item.discription}</p>
          
          <button className='button'><a href={item.link} rel="noreferrer" target="_blank" >Live ~~{'>'}</a></button>
          </div>
         
          
        </div>
      )
    })}
    </div>
    </div>
    </React.Fragment>
  )
}

export default Project