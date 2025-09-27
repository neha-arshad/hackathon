"use client";

import React from "react";
import { Shield, Hospital, CalendarCheck, Bell, BarChart3 } from "lucide-react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-300 to-blue-200 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Frontline Worker Support AI is a multi-agent system designed to
            bridge the gap between citizens and frontline workers. From
            emergencies to daily services, our AI enables faster response, clear
            guidance, and fair distribution of resources.
          </p>
        </section>

        {/* Mission & Vision Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-blue-800/60 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To empower frontline workers and citizens with AI-driven support
              that reduces delays, removes confusion, and ensures help reaches
              the right people at the right time.
            </p>
          </div>
          <div className="bg-blue-800/60 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              We envision a future where AI acts as a bridge between citizens
              and frontline services — ensuring faster response, smarter
              decisions, and equitable support for all.
            </p>
          </div>
        </section>

        {/* AI Agents Work Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-10">How Our AI Agents Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="flex flex-col items-center bg-blue-800/60 p-6 rounded-xl shadow-lg">
              <Shield className="w-12 h-12 mb-4 text-yellow-300" />
              <h3 className="font-bold mb-2">Triage Agent</h3>
              <p className="text-sm">
                Analyzes emergencies and decides urgency.
              </p>
            </div>
            <div className="flex flex-col items-center bg-blue-800/60 p-6 rounded-xl shadow-lg">
              <Hospital className="w-12 h-12 mb-4 text-green-300" />
              <h3 className="font-bold mb-2">Guidance Agent</h3>
              <p className="text-sm">
                Matches the case to the right service/department.
              </p>
            </div>
            <div className="flex flex-col items-center bg-blue-800/60 p-6 rounded-xl shadow-lg">
              <CalendarCheck className="w-12 h-12 mb-4 text-pink-300" />
              <h3 className="font-bold mb-2">Booking Agent</h3>
              <p className="text-sm">
                Books appointments and pre-fills citizen forms.
              </p>
            </div>
            <div className="flex flex-col items-center bg-blue-800/60 p-6 rounded-xl shadow-lg">
              <Bell className="w-12 h-12 mb-4 text-red-300" />
              <h3 className="font-bold mb-2">Follow-up Agent</h3>
              <p className="text-sm">
                Sends reminders, updates, and progress tracking.
              </p>
            </div>
            <div className="flex flex-col items-center bg-blue-800/60 p-6 rounded-xl shadow-lg">
              <BarChart3 className="w-12 h-12 mb-4 text-purple-300" />
              <h3 className="font-bold mb-2">Equity Oversight</h3>
              <p className="text-sm">
                Tracks demand vs. capacity and supports administrators.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-white">
            Meet Our Team
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-12 text-gray-200">
            A group of innovators participating in the National Agentic AI
            Hackathon, building impactful AI solutions for real-world frontline
            challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Member 1 */}
            <div className="bg-blue-800/70 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Mubashir"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
              />
              <h3 className="font-bold text-xl mb-1">Mubashir Saeedi</h3>
              
            </div>

            {/* Member 2 */}
            <div className="bg-blue-800/70 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <img
                src="https://randomuser.me/api/portraits/women/50.jpg"
                alt="Misbah"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
              />
              <h3 className="font-bold text-xl mb-1">Misbah Shakeel</h3>
              
            </div>

            {/* Member 3 */}
            <div className="bg-blue-800/70 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Neha"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
              />
              <h3 className="font-bold text-xl mb-1">Neha Arshad</h3>
              
            </div>

            {/* Member 4 */}
            <div className="bg-blue-800/70 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <img
                src="https://randomuser.me/api/portraits/women/75.jpg"
                alt="Iqra"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
              />
              <h3 className="font-bold text-xl mb-1">Iqra Khan</h3>
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
