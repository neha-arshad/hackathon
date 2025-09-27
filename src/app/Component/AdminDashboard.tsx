"use client";

import React, { useState, useEffect, useRef } from "react";

type Message = {
  id: number;
  sender: "user" | "agent";
  text: string;
};

let idCounter = 0;

const AdminDashboard = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: idCounter++,
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response line by line
    const responseLines = [
      `Hi!`,
      `I got your message: "${userMessage.text}"`,
      `How can I assist you further?`,
    ];

    let lineIndex = 0;

    const sendLine = () => {
      if (lineIndex >= responseLines.length) return;
      const agentMessage: Message = {
        id: idCounter++,
        sender: "agent",
        text: responseLines[lineIndex],
      };
      setMessages((prev) => [...prev, agentMessage]);
      lineIndex++;
      setTimeout(sendLine, 600); // 600ms delay per line
    };

    setTimeout(sendLine, 600);
  };

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full max-h-[700px] w-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-2xl p-6">
      <h1 className="text-3xl font-extrabold mb-5 text-gray-800 text-center">
        Frontline Worker Support AI
      </h1>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto mb-4 space-y-3 px-3 py-2 bg-white rounded-2xl shadow-inner flex flex-col"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`px-4 py-2 rounded-2xl max-w-[70%] break-words ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-200 text-gray-800 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-indigo-500 text-white px-6 py-3 rounded-2xl hover:bg-indigo-600 transition-shadow shadow-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
