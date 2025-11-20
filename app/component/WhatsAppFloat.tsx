"use client";
import React, { useState } from "react";
import { MessageCircle, X, Send, Smile } from "lucide-react";

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  // CONFIGURATION
  const phoneNumber = "2348000000000"; // Your WhatsApp Number
  const agentName = "Moja Support";
  const defaultGreeting =
    "Hello! 👋 How can we help you with your property search today?";

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    // Construct the URL with the user's specific message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      userMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Optional: Clear input after sending
    setUserMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* --- CHAT WIDGET WINDOW --- */}
      <div
        className={`
          mb-4 w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300 origin-bottom-right
          ${
            isOpen
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Header */}
        <div className="bg-[#075E54] p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* Avatar / Placeholder */}
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              {/* Online Status Dot */}
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#075E54] rounded-full"></span>
            </div>
            <div>
              <h3 className="font-semibold text-sm">{agentName}</h3>
              <p className="text-[10px] text-green-100 opacity-90">
                Typically replies instantly
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Body (Background Pattern) */}
        <div className="bg-[#E5DDD5] h-[250px] p-4 overflow-y-auto flex flex-col relative">
          {/* WhatsApp Doodle Background Pattern Overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]"></div>

          {/* Incoming Message Bubble */}
          <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] self-start relative z-10 mb-2">
            <p className="text-sm text-gray-800 leading-relaxed">
              {defaultGreeting}
            </p>
            <span className="text-[10px] text-gray-400 block text-right mt-1">
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>

        {/* Input Area */}
        <form
          onSubmit={handleSendMessage}
          className="bg-white p-3 flex items-center gap-2 border-t border-gray-100"
        >
          <div className="text-gray-400 hover:text-gray-600 cursor-pointer p-1">
            <Smile className="w-6 h-6" />
          </div>
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow bg-gray-100 text-gray-700 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500/50"
          />
          <button
            type="submit"
            disabled={!userMessage.trim()}
            className={`
              p-2 rounded-full transition-all duration-200
              ${
                userMessage.trim()
                  ? "bg-[#075E54] text-white hover:bg-[#054c44] shadow-md"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            <Send className="w-5 h-5 pl-0.5" />
          </button>
        </form>
      </div>

      {/* --- FLOATING TRIGGER BUTTON --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none z-50"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white transition-transform duration-300 rotate-90" />
        ) : (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none"></span>
            <MessageCircle className="w-7 h-7 text-white relative z-10" />
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full z-20"></span>
          </>
        )}
      </button>
    </div>
  );
};

export default WhatsAppFloat;
