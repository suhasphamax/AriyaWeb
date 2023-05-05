import React, { useState } from "react";
import "./Chatbot.css";
import logo from '../src/assets/ariyaLogo.png'

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <div className={isOpen ? "chatbot-icon open" : "chatbot-icon"} onClick={toggleChatbot}>
        <img  className="chatbot-icon "src={logo} alt="Chatbot icon" />
      </div>
      <div className={isOpen ? "chatbot-content open" : "chatbot-content"}>
       <p>
                Hello I am Ariya How can i help you?
       </p>
      </div>
    </div>
  );
}

export default Chatbot;
