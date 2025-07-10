import React from "react";
import { TypeAnimation } from "react-type-animation";
import { myData } from "../assets/myasset";
import "./aboutsection.css";

const AboutSection = () => {
  return (
    <div className="about-main">
      <div className="photo-developer">
        <div className="photo">
          <img
            src={myData.profilePic}
            alt="Purushottam Gurjar"
            className="img-photo"
          />
        </div>
        <div className="developer">
          <div className="about-name">
            <p className="p-about-name">Hi I am Purushottam Gurjar</p>
          </div>
          

          <div className="about-developer">
            <TypeAnimation
              sequence={[
                "I am React Developer  ",
                2000,
                "Building Dynamic Apps  ",
                2000,
                "I am C++ Programmer  ",
                2000,
                "I am Exploring Backend",
                2000,
                "Learning DataScience",
                2000,
                "I am C++ Programmer  ",
                2000,
                "Building Dynamic Apps  ",
                2000,
                "", 
              ]}
              wrapper="span"
              speed={200} // Typing speed (ms per character)
              deletionSpeed={200} // Slower backspace
              style={{
                display: "block",
                textAlign: "center",
              }}
              repeat={Infinity}
              className="type-animation"
            />
        
          </div>
        </div>
      </div>
      

      <p className="about-text">Hi Everyone , I am Purushottam Gurjar. Welcome to my Portfolio Website. I am <span className="about-text-enhace">C++ Programmer </span> with a strong foundation in Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), and modern Web Development. I learned by solving more than <span className="about-text-enhace">1000+ problems</span> collectively on <span  className="about-text-enhace"> LeetCode </span>, <span className="about-text-enhace">GFG </span>and Other Coding Platforms .  Beyond algorithms, I actively work on building scalable and responsive web applications. My primary tech stack includes <span className="about-text-enhace">React.js</span> for the frontend and  <span className="about-text-enhace">Node.js, Express.js, and MongoDB</span> on the backend. My long-term goal is to become a full-stack engineer capable of designing robust, production-grade systems.

            </p>

    </div>
  );
};

export default AboutSection;
