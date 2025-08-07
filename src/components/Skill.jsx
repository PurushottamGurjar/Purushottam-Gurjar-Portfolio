import React from "react";
import "./skill.css";
import { dataScienceIconData, languageIconData } from "../assets/myasset";
import { webIconData } from "../assets/myasset";
import { toolIconData } from "../assets/myasset";

const Skill = () => {
  return (
    <div className="skills-main">
      <div className="skill-technologies-text">Skills & Technologies</div>
      <div class="gradient-line"></div>

      <div className="div-languages">
        <div className="p-languages">Languages</div>
        <div className="div-language-icon-container">
          {languageIconData.map((item, index) => (
            <div key={index} className="glass-skill-card">
              <div className="skill-card-header">
                <img src={item.icon} alt={item.name} className="skill-icon" />
                <div>
                  <h4 className="skill-title">{item.name}</h4>
                  <p className="skill-level">{item.level}</p>
                </div>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ width: item.proficiency }}
                ></div>
              </div>
              {/* <span className="skill-percent">{item.proficiency}</span> */}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="div-languages">
        <div className="p-languages">Languages</div>
        <div className="div-language-icon-container">
            {languageIconData.map((item, index) => (
          <div key={index} className="each-item">
            <div className="language-icon">
              <img
                src={item.icon}
                alt={item.name}
                className="language-icon-img"
              />
            </div>
            <div className="language-name">{item.name}</div>
          </div>
        ))}
        </div>
      </div> */}

      <div className="div-languages">
        <div className="p-languages">Web-Development </div>
        <div className="div-language-icon-container">
          {webIconData.map((item, index) => (
            <div key={index} className="glass-skill-card">
              <div className="skill-card-header">
                <img src={item.icon} alt={item.name} className="skill-icon" />
                <div>
                  <h4 className="skill-title">{item.name}</h4>
                  <p className="skill-level">{item.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="div-languages extra">
        <div className="p-languages">Web Development</div>
        <div className="div-language-icon-container">
            {webIconData.map((item, index) => (
          <div key={index} className="each-item">
            <div className="language-icon">
              <img
                src={item.icon}
                alt={item.name}
                className="language-icon-img"
              />
            </div>
            <div className="language-name">{item.name}</div>
          </div>
        ))}
        </div>
      </div> */}

      <div className="div-languages">
        <div className="p-languages">Data Science </div>
        <div className="div-language-icon-container">
          {dataScienceIconData.map((item, index) => (
            <div key={index} className="glass-skill-card">
              <div className="skill-card-header">
                <img src={item.icon} alt={item.name} className="skill-icon" />
                <div>
                  <h4 className="skill-title">{item.name}</h4>
                  <p className="skill-level">{item.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="div-languages">
        <div className="p-languages">Others</div>
        <div className="div-language-icon-container">
          {dataScienceIconData.map((item, index) => (
            <div key={index} className="each-item">
              <div className="language-icon">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="language-icon-img"
                />
              </div>
              <div className="language-name">{item.name}</div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="div-languages">
        <div className="p-languages">Tools</div>
        <div className="div-language-icon-container">
          {toolIconData.map((item, index) => (
            <div key={index} className="glass-skill-card">
              <div className="skill-card-header">
                <img src={item.icon} alt={item.name} className="skill-icon" />
                <div>
                  <h4 className="skill-title">{item.name}</h4>
                  <p className="skill-level">{item.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      

      {/* <div className="div-languages">
        <div className="p-languages">Tools</div>
        <div className="div-language-icon-container">
          {toolIconData.map((item, index) => (
            <div key={index} className="each-item">
              <div className="language-icon">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="language-icon-img"
                />
              </div>
              <div className="language-name">{item.name}</div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Skill;
