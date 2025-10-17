"use client";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useFocusText } from "./FocusTextProvider";

const Chatbot = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { focusText } = useFocusText();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (prompt.trim() === "") return;

    const userMessage = { text: prompt, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: `${focusText}\n\nUser query: ${prompt}` }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const botMessage = { text: data.message, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("fetch error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Sorry something went wrong:", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 className="text-xl bg-gradient-to-r from-[#2a9b59] via-[#3da7d4] to-[#d9c938] bg-clip-text text-transparent font-bold text-center pb-3">SH4 AI Assistant Chatbot</h1>

      <div
        style={{
          border: "1px solid #d9c938",
          borderRadius: "8px",
          // borderRadius: "8px",
          padding: "10px",
          height: "400px",
          overflowY: "scroll",
          marginBottom: "10px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              margin: "10px 0",
            }}
          >
            <span
              style={{
                backgroundColor: msg.sender === "user" ? "#dcf8c6" : "#d9c938",
                padding: "10px 20px",
                borderRadius: "20px",
                display: "inline-block",
                maxWidth: "80%",
                boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
              }}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </span>
          </div>
        ))}
        {loading && (
          <div style={{ textAlign: "left", margin: "5px 0" }}>Thinking...</div>
        )}
      </div>
      {/* You can add your form here if needed */}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", marginTop: "10px" }}
      >
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
          style={{
            flex: 1,
            padding: "10px",
            borderWidth: "1px",
            borderColor: "#d9c938",
            borderRadius: "5px",
            marginRight: "10px",
          }}
          placeholder="Ask me anything regards hashing..."
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
