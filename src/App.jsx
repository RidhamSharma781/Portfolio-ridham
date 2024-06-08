import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Education from './Components/Education/Education'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  )
}

export default App
