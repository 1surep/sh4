"use client";
import { useState } from "react";
import Chatbot from "./Chatbot";
import { FocusTextProvider } from "./FocusTextProvider";

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
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "20px",
              position: "relative",
              width: "90%",
              maxWidth: "700px",
            }}
          >
            <button
              onClick={toggleModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
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
