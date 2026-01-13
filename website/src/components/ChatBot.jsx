import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WHATSAPP_NUMBER = "917720011155"; // 👈 replace with your number (no +, no spaces)

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi 👋 Welcome to The Concrete Story! How can we help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    // WhatsApp message format
    const message = `
Hello The Concrete Story 👋

Customer Message:
"${input}"

Sent from: Website Chatbot
`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Update chat UI
    setMessages((prev) => [
      ...prev,
      { from: "user", text: input },
      {
        from: "bot",
        text: "✅ Your message has been sent to our WhatsApp. We’ll contact you shortly.",
      },
    ]);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[9999] bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white shadow-2xl rounded-lg z-[9999] overflow-hidden">
          {/* Header */}
          <div className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
            <span className="font-semibold">The Concrete Story</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 p-3 space-y-2 overflow-y-auto bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm px-3 py-2 rounded-md max-w-[80%] ${
                  msg.from === "bot"
                    ? "bg-gray-200 text-gray-900"
                    : "bg-amber-600 text-white ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Quick Actions (Optional but recommended) */}
          <div className="px-3 pb-2 flex flex-wrap gap-2">
            {[
              "House Construction",
              "Renovation Work",
              "Interior Design",
              "Get a Quote",
            ].map((text) => (
              <button
                key={text}
                onClick={() => setInput(text)}
                className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full hover:bg-amber-200"
              >
                {text}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border px-3 py-2 text-sm focus:outline-none"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-amber-600 text-white px-3 rounded"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
