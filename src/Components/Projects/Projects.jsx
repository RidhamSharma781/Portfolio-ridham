import React from 'react'
import './Projects.css'
import shopper from '../../images/Shopper.png'
import { projects } from '../../Data/constants'

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <h1>Projects</h1>
      <p>I have worked on many projects. From web apps to android apps. Here are some of my projects.</p>
      <div className="project-container">
      {projects.map((project,idx)=>{
        return <div key={idx} className="project">
        <img src={project.image} alt="" />
        <div className="tags">
            <span>{project.tags[0]}</span>
            <span>{project.tags[1]}</span>
            <span>{project.tags[2]}</span>
            <span>{project.tags[3]}</span>
        </div>
        <div className="info">
        <h3 className="title">{project.title}</h3>
        <p className="date">{project.date}</p>
        <p className="desc">{project.description}</p>
        </div>
        <div className="project-btn">
            <a href={project.webapp} className='live' target='_blank'>Live Project</a>
            <a href={project.github} className='code' target='_blank'> Code</a>
        </div>
      </div>
      })}
      </div>
     
      
    </div>
  )
}

export default Projects
