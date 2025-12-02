"use client";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useFocusText } from "./FocusTextProvider";
import "./chatbot.css";

const quickPrompts = [
  "Tell me about the reunion",
  "Who are the classmates?",
  "What events are planned?",
];

const Chatbot = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef(null);
  const { focusText } = useFocusText();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (prompt.trim() === "" || loading) return;

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
        { text: "Sorry, something went wrong. Please try again.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleChipClick = (value) => {
    setPrompt(value);
  };

  useEffect(() => {
    if (!messagesRef.current) return;
    messagesRef.current.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="chatbot-shell">
      <section className="chatbot-hero">
        <h1 className="chatbot-hero-title">Hello!</h1>
        <p className="chatbot-hero-subtitle">
          Ask anything about Sierra H4 (The Duo Kennel), hashing, SH4 events, or anything related to Sierra H4 & hashing in general.
        </p>
      </section>

      <section className="chatbot-messages-shell">
        <div className="chatbot-messages" ref={messagesRef}>
          {messages.length === 0 && (
            <p className="chatbot-empty-state">
              No history yet. Start with a quick prompt chip or describe what you need.
            </p>
          )}
          {messages.map((msg, index) => (
            <div key={index} className={`chatbot-message ${msg.sender}`}>
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p style={{ margin: 0 }}>{children}</p>,
                  ul: ({ children }) => <ul style={{ margin: 0 }}>{children}</ul>,
                  ol: ({ children }) => <ol style={{ margin: 0 }}>{children}</ol>,
                  li: ({ children }) => <li>{children}</li>,
                  h1: ({ children }) => <h1>{children}</h1>,
                  h2: ({ children }) => <h2>{children}</h2>,
                  h3: ({ children }) => <h3>{children}</h3>,
                  h4: ({ children }) => <h4>{children}</h4>,
                  h5: ({ children }) => <h5>{children}</h5>,
                  h6: ({ children }) => <h6>{children}</h6>,
                  strong: ({ children }) => <strong>{children}</strong>,
                  em: ({ children }) => <em>{children}</em>,
                  a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
                  code: ({ inline, children, className }) => 
                    inline ? (
                      <code>{children}</code>
                    ) : (
                      <pre><code className={className}>{children}</code></pre>
                    ),
                  blockquote: ({ children }) => <blockquote>{children}</blockquote>,
                  hr: () => <hr />,
                  table: ({ children }) => <table>{children}</table>,
                  thead: ({ children }) => <thead>{children}</thead>,
                  tbody: ({ children }) => <tbody>{children}</tbody>,
                  tr: ({ children }) => <tr>{children}</tr>,
                  th: ({ children }) => <th>{children}</th>,
                  td: ({ children }) => <td>{children}</td>,
                }}
              >
                {msg.text}
              </ReactMarkdown>
            </div>
          ))}
        </div>
        {loading && <span className="chatbot-loading">Thinking…</span>}
      </section>

      <form className="chatbot-input-wrapper" onSubmit={handleSubmit}>
        <button
          type="button"
          className="chatbot-icon-btn"
          aria-label="Add attachments"
          disabled={loading}
        >
          +
        </button>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
          className="chatbot-input-field"
          placeholder="Ask our Nameless SH4 AI bot"
        />
        <button
          type="button"
          className="chatbot-voice-btn"
          aria-label="Start voice prompt"
          disabled={loading}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
          </svg>
        </button>
        <button type="submit" className="chatbot-send-btn" disabled={loading}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12L20 4L12 20L11 13L4 12Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
