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
                3000,
                "Building Dynamic Apps  ",
                3000,
                "I am C++ Programmer  ",
                3000,
                "I am Exploring Backend",
                3000,
                "Learning DataScience",
                3000,
                "I am C++ Programmer  ",
                3000,
                "Building Dynamic Apps  ",
                3000,
                "", // Wait before restarting
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
      <p className="about-text"> Hi Everyone , Welcome to my Portfolio Website . I am Purushottam Gurjar . I am C++ Programmer learned by solving more than 1000 problems collectively on LeetCode , GFG and Other Coding Platforms .I had Covered all the Advanced topics of the DSA and OOPs. Also I am a Web Developer currently Exploring Backend. I am also dedicated to learn ML and AI to be a better fit in this new era of AI.
            </p>

    </div>
  );
};

export default AboutSection;
