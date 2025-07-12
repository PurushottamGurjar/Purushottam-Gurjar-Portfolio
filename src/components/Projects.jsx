import React from 'react'
import { projectData } from '../assets/myasset'
import "./projects.css"

const Projects = () => {
  return (
    <div>
      <div className="project-container">
        <p className='project-name'>AI-Divie : AI chatBot and Coding Assistant</p>
        <div className="project-aidivie">
            <div className="project-ai-divie-ui-image">
            <img className="project-ai-divie-ui-image" src={projectData.aiDivieUiImg} alt="AI-Divie Image is Loading..." loading='lazy'/>
            </div>
            <div className="project-ai-divie-content">
                    <ul>
                        <li className='project-aidivie-each-line'>hi i hope this is good and how all going</li>
                        <li className='project-aidivie-each-line'>hi i hope this is good and how all going</li>
                        <li className='project-aidivie-each-line'>hi i hope this is good and how all going</li>
                        <li className='project-aidivie-each-line'>hi i hope this is good and how all going</li>
                        <li className='project-aidivie-each-line'>hi i hope this is good and how all going</li>
                        <li className='project-aidivie-each-line'>hi i hope this is good and how all going</li>
                        <li className='project-aidivie-each-line'>hi i hope this is good and how all going</li>
                        <li className='project-aidivie-each-line'>hi i hope this is good and how all going</li>
                    </ul>
                    <div className="project-ai-divie-buttons">
                        <div className="project-aidivie-each-button">Github</div>
                        <div className="project-aidivie-each-button">Live Demo</div>
                        
                    </div>
                    
            </div>
        </div>
        
      </div>


      <div className="project-container">
        <p className='project-name'>AI-Divie : AI chatBot and Coding Assistant</p>
        <div className="project-aidivie">
           
            <div className="project-ai-divie-content">
                    <ul>
                        <li className='project-aidivie-each-line'>hi i hope this is good and how alhope this is good and how hope this is good hope this is good and howhope this is good and howand howl going</li>
                        <li className='project-aidivie-each-line'>hi i hope this is good and how all going</li>
                        <li className='project-aidivie-each-line'>hi i hope this is good and how all going</li>
                        <li className='project-aidivie-each-line'>hi i hope this is good and how all going</li>
                        <li className='project-aidivie-each-line'>hi i hope this is good and how all going</li>
                        <li className='project-aidivie-each-line'>hi i hope this is good and how all going</li>
                        <li className='project-aidivie-each-line'>hi i hope this is good and how all going</li>
                        <li className='project-aidivie-each-line'>hi i hope this is good and how all going</li>
                    </ul>
                    <div className="project-ai-divie-buttons">
                        <div className="project-aidivie-each-button">Visit Github Repo</div>
                        <div className="project-aidivie-each-button">Visit live  site</div>
                        
                    </div>
                    
            </div>
             <div className="project-ai-divie-ui-image">
            <img className="project-ai-divie-ui-image" src={projectData.aiDivieUiImg} alt="AI-Divie Image is Loading..." loading='lazy'/>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects
