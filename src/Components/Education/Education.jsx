import React from 'react'
import './Education.css'
import { education } from '../../Data/constants'

const Education = () => {
  return (
    <div className='education' id='education'>
      <h1>Education</h1>
      <p>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
      <section className="container-big-education">
    
        {education.map((stage, idx) => {
          return <div key={idx} className="education-container">
            <div className="header">
              <img src={stage.img} alt="" />
              <div className="education-info">
                <div className="education-name">{stage.school}</div>
                <div className="class">{stage.degree}</div>
                <div className="year">{stage.date}</div>
              </div>
            </div>
            <div className="grade">
              <b>Grade :</b> <span>{stage.grade}</span>
            </div>
            <p>{stage.desc}</p>
          </div>
        })}
      
        
      </section>
    </div>
  )
}

export default Education
