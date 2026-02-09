import { useState } from "react";
import '../App.css';

const OLLAMA_URL = "http://localhost:11434/api/generate";
const MODEL = "llama3"; // Or use "phi3" / "gemma:2b" for faster responses

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message;
    setChat(prev => [...prev, { role: "user", text: userMessage }]);
    setMessage("");
    setLoading(true);

    setChat(prev => [...prev, { role: "bot", text: "" }]);

    try {
      const response = await fetch(OLLAMA_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: MODEL,
          prompt: userMessage,
          stream: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`Ollama error: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n").filter(line => line.trim());

        for (const line of lines) {
          try {
            const data = JSON.parse(line);
            if (data.response) {
              setChat(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  ...updated[updated.length - 1],
                  text: updated[updated.length - 1].text + data.response
                };
                return updated;
              });
            }
          } catch (e) {
          }
        }
      }
    } catch (err) {
      console.error(err);
      alert("Ollama error — make sure Ollama is running");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Personal ChatBot</h2>

      <div className="chat-box">
        {chat.map((msg, i) => (
          <div key={i} className={msg.role}>
            <b>{msg.role}:</b> {msg.text}
          </div>
        ))}
      </div>

        <div className="input-area">
      <input 
        value={message}
        placeholder="Ask anything..."
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e)=> {
        if(e.key === "Enter")sendMessage();
        }}
      />

      <button onClick={sendMessage} disabled={loading}>
        {loading ? "Thinking..." : "Send"}
      </button>
      </div>
    </div>
  );
}

// export default ChatBot;