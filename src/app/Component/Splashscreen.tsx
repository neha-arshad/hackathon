"use client";

import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";

const Splashscreen = () => {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showHome) {
    return <HomePage />;
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white animate-pulse">
        Frontline Worker Support AI
      </h1>
    </div>
  );
};

export default Splashscreen;
