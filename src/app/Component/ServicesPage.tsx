"use client";

import { InfiniteMovingCards } from "./Ui/infinite-moving-card";
import { FaBolt, FaHeartbeat, FaGavel } from "react-icons/fa";

const serviceCards = [
  {
    quote:
      "Report and track electricity, gas, and water-related issues quickly with instant support.",
    name: "Utility Support",
    title: "Citizen Service",
    icon: <FaBolt className="text-yellow-400 text-3xl" />,
  },
  {
    quote:
      "Request medical help or check hospital availability in real-time without delays.",
    name: "Health Support",
    title: "Medical Assistance",
    icon: <FaHeartbeat className="text-red-500 text-3xl" />,
  },
  {
    quote:
      "Report crimes, emergencies, and get immediate help from the right authorities.",
    name: "Criminal Support",
    title: "Safety & Security",
    icon: <FaGavel className="text-blue-400 text-3xl" />,
  },
];

function ServicesPage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[40rem] w-full bg-gradient-to-r from-blue-400 via-indigo-600 to-cyan-500 overflow-hidden text-white">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 z-10 tracking-tight drop-shadow-lg">
        Our Essential <span className="text-cyan-300">Services</span>
      </h2>

      {/* Moving Cards */}
      <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={serviceCards}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
