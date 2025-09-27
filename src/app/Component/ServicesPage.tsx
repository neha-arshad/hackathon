"use client";

import React from "react";
import { FaBolt, FaHeartbeat, FaGavel } from "react-icons/fa";

const ServicesPage = () => {
  const services = [
    {
      name: "Utility Support",
      description:
        "Report and track electricity, gas, and water-related issues quickly.",
      icon: <FaBolt className="text-yellow-400 text-6xl mb-4" />,
    },
    {
      name: "Health Support",
      description:
        "Request medical help or check hospital availability in real-time.",
      icon: <FaHeartbeat className="text-red-500 text-6xl mb-4" />,
    },
    {
      name: "Criminal Support",
      description:
        "Report crimes, emergencies, and get assistance from authorities.",
      icon: <FaGavel className="text-gray-700 text-6xl mb-4" />,
    },
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
          Our Services
        </h1>
        <p className="text-lg text-gray-600">
          Explore the services we provide to support citizens efficiently.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition-shadow"
          >
            {service.icon}
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              {service.name}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
