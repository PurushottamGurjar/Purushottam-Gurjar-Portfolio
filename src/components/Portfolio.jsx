import React from 'react'
import "./portfolio.css"
import AboutSection from './AboutSection'
import Skill from '../assets/Skill'
import Contactme from './Contactme'
import Projects from './Projects'

const Portfolio = () => {
  return (
    <div>
        <AboutSection/>
        {/* <Projects/> */}
        <Skill/>
        <Contactme/>
      
    </div>
  )
}

export default Portfolio
