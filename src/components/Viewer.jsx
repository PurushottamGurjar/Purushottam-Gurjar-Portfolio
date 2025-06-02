import React from "react";
import { myData } from "../assets/myasset";
import "./viewer.css";
import { TypeAnimation } from "react-type-animation";

const Viewer = () => {
  return (
    <div className="viewer-panel">
      <div className="sarthee-logo-text">
        <div className="nitw-logo-div">
        <img src={myData.NITW} alt="NIT Warangal" className="nitw-logo-img" />
      </div>
      <div className="tracking-text">
        <div className="short-tracking-text">
          NIT Warangal E-Sarthee Tracking
        </div>
        <div className="long-tracking-text">
          Welcome to National Institute of Technology , Warangal E-Sarthee
          Tracking{" "}
        </div>
      </div>
      </div>

      <TypeAnimation
        sequence={[
          "This Page is created  by Purushottam Gurjar",
          3000,
          "Many Improvements are on the way ",
          3000,
          "Your suggestions are Requested",
          3000,
          "Let's Make our campus Best",
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

      <div className="iframe-container">
        <p className="van-number">Van 1: Running Status </p>
        {/* <iframe
          id="myIframe"
          src="https://purush-project1esartheenitw.web.val.run/?view=e816a051-3f44-4165-9248-699fba1c2076"
        ></iframe> */}
        <iframe
          id="myIframe"
          src="https://purush--aca7e588275611f086ff569c3dd06744.web.val.run/?view=45fbfef8-a965-49b3-b5ed-2810bab8c260"
        ></iframe>
      </div>

      <footer>&copy; 2025 Purushottam Gurjar. All Rights Reserved.</footer>
    </div>
  );
};

export default Viewer;
