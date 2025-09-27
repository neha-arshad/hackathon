"use client";

import React, { useState } from "react";
import { FaBolt, FaHeartbeat, FaGavel } from "react-icons/fa";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse({ error: "⚠️ Backend se connect nahi ho paya." });
    }

    setLoading(false);
  };

  return (
    <div className="font-sans">
      {/* Hero + Query Section */}
      <section className="relative flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 text-white min-h-screen overflow-hidden px-6">
        {/* Decorative Background Icons */}
        <FaBolt className="absolute top-20 left-10 text-yellow-400 text-9xl opacity-15 animate-bounce" />
        <FaHeartbeat className="absolute bottom-20 right-10 text-red-400 text-9xl opacity-15 animate-pulse" />
        <FaGavel className="absolute top-1/2 left-1/4 text-gray-200 text-10xl opacity-10" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 flex gap-20">
          <FaBolt className="text-yellow-400 text-[12rem]" />
          <FaHeartbeat className="text-red-400 text-[12rem]" />
          <FaGavel className="text-gray-200 text-[12rem]" />
        </div>

        {/* Main Content */}
        <div className="relative max-w-5xl mx-auto text-center z-20">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Frontline Worker Support AI
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-100 drop-shadow-sm">
            Helping citizens connect to essential services quickly and
            efficiently.
          </p>

          {/* Citizen Query Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 justify-center mb-6 bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl shadow-lg"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Electricity issue in my area"
              className="flex-1 border text-black  border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-300 backdrop-blur-sm"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:opacity-90 shadow-md font-semibold transition-all"
            >
              Request Support
            </button>
          </form>

          {/* Loading & Response */}
          {loading && <p className="text-black mt-2">⏳ Processing...</p>}
          {response && (
            <div className="bg-white text-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 mt-6 max-w-xl mx-auto">
              <h3 className="font-semibold mb-2 text-lg">Response:</h3>
              <pre className="whitespace-pre-wrap text-sm">
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
