import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppChatButton = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-[999] flex flex-col items-end gap-3">

      {/* Chat Bubble */}
      {open && (
        <div className="bg-white rounded-xl shadow-xl px-4 py-3 text-sm text-gray-700 max-w-[240px] animate-fade-in border border-amber-200">
          <div className="font-semibold text-gray-900 mb-1">
            👋 Hello!
          </div>
          <div>
            Need help with your construction project?  
            Chat with us on WhatsApp.
          </div>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/917995519988"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 rounded-full 
                   bg-gray-900 text-white shadow-xl 
                   hover:bg-amber-600 transition-all duration-300 
                   hover:scale-110 group"
      >
        {/* Amber Glow Pulse */}
        <span className="absolute inset-0 rounded-full bg-amber-500/40 animate-ping"></span>

        {/* Icon */}
        <MessageCircle className="w-8 h-8 relative z-10" />

        {/* Close Button */}
        {open && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
            className="absolute -top-2 -right-2 bg-gray-900 text-white rounded-full p-1 shadow hover:bg-black"
          >
            <X size={14} />
          </button>
        )}
      </a>
    </div>
  );
};

export default WhatsAppChatButton;
