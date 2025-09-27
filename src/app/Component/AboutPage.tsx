"use client";

import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4 animate-pulse">About Us</h1>
        <p className="text-lg md:text-xl max-w-3xl">
          Frontline Worker Support AI is an intelligent citizen support platform
          designed to assist healthcare, law enforcement, and utility workers
          with faster and smarter solutions.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white text-gray-800 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to empower frontline workers by using Artificial
              Intelligence to reduce response times, improve decision-making,
              and ensure citizens receive the help they need without delays.
            </p>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-vector/team-goals-concept-illustration_114360-5163.jpg"
              alt="Mission"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-gray-100 text-gray-800 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://img.freepik.com/free-vector/business-vision-concept-illustration_114360-7861.jpg"
              alt="Vision"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              We envision a world where technology bridges the gap between
              citizens and frontline services, creating smarter, safer, and
              faster communities.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <p className="max-w-3xl mx-auto text-lg mb-10">
          A group of passionate innovators participating in the National Agentic
          AI Hackathon to build impactful AI solutions for real-world problems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold text-xl mb-2">Neha Arshad</h3>
            <p className="text-sm">Frontend Developer</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold text-xl mb-2">Team Member 2</h3>
            <p className="text-sm">Backend Developer</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold text-xl mb-2">Team Member 3</h3>
            <p className="text-sm">AI Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

