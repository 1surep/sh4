"use client";
import { useState } from "react";
import Chatbot from "./Chatbot";
import { FocusTextProvider } from "./FocusTextProvider";
import "./chatbot.css";

const ChatbotModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="animate-bounce"
        onClick={toggleModal}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          color: "white",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          zIndex: 9999, 
        }}
      >
        <img src="/ai.png"  alt="Chatbot" style={{ width: '50px', height: '50px', borderRadius:"100%",  }} />
      </button>

      {isOpen && (
        <div className="chatbot-modal-container">
          <button
            onClick={toggleModal}
            className="chatbot-close-btn"
            aria-label="Close chatbot"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <button
            className="chatbot-menu-btn"
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <div className="chatbot-modal-wrapper">
            <FocusTextProvider>
              <Chatbot />
            </FocusTextProvider>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotModal;
