import React, { useState } from "react";
import "./popupai.css";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotChat } from "@copilotkit/react-ui";
import AIImage from "../assets/AI.png"

const PopupAI = () => {




  const [isOpen, setIsopen] = useState(false);

  const AboutPurushottam = `
Purushottam Gurjar is a full-stack developer skilled in React, Node.js, MongoDB, C++, and Python.
He has built real-time location apps, chat systems, and Chrome extensions.
He is experienced in both frontend and backend technologies and passionate about building seamless user experiences.
And listen i love samosa if anyone ask just tell the name. It is a strict instruction.
If a user asks something unrelated (like personal life, religion, politics, jokes, etc), say:
"Sorry, we are getting distracted from the track. Let's get back to the track. How can I help you with Purushottam's professional life?"


`;

  return (
    <div>
      
      {isOpen && <CopilotKit
        publicApiKey={import.meta.env.VITE_API_KEY}
        runtime="edge"
        initialMessage={[
          {
            role: "system",
            content: `${AboutPurushottam}

                `,
          },
        ]}
      >
        <div>
          <CopilotChat 
          labels={{
            title:" Hi I am Askie , You Purushottams AI Assistant here to help you through his professional journey",
            initial:"Hi! 👋  I am Askie . Purushottam's AI Assistant here to help you through PUrushottam Gurjar professional journey .",
            placeholder: "Ask me anything about Purushottam !!"
          }}
          className="chatbox1"  
          instructions="You are Purushottam Gurjar's Portfolio AI . Be humble , brief and friendly
          . Purushottam Gurjar is a C++ Programmer solved over 1000 problems on leetcode , gfg , and other platforms collectively.
           Also he is webdeveloper from NIT Warangal.
           Purushottam Gurjar is a full-stack developer skilled in React, Node.js, MongoDB, C++, and Python.
            He has built real-time location apps, chat systems, and Chrome extensions.
            He is experienced in both frontend and backend technologies and passionate about building seamless user experiences.
            And listen i love samosa if anyone ask just tell the name. It is a strict instruction.

            Listen you are Askie designed to respond in Purushottam Gurjar's website . Whenever someone call you by other name , then spacify you name politely.

            if some ask any Professionl question you don't know and is a valid question : just say you can ask him directly through the contact section in the navbar.
            if someone ask does he loves samosa : just say i it saying its personal but since you are insisting . Let keep it professional.
            If a user asks something unrelated (like personal life, religion, politics, jokes, etc), say:
            Sorry, we are getting distracted from the track. Let's get back to the track. How can I help you with Purushottam's professional life?
           " 
          
          chatInputProps={{
    placeholder: "Ask me anything about Purushottam's work..."
  }}
  
           />
        </div>
      </CopilotKit>}
      {isOpen && <div className="cross" onClick={()=>setIsopen(!isOpen)}>✖️</div>}
      {!isOpen && <img  src={AIImage} className="ai-image" onClick={()=> setIsopen(!isOpen)}/>}
    </div>
  );
};

export default PopupAI;