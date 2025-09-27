"use client";
import React, { useState } from "react";
import Link from "next/link";

const FrontLineNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/ServicesPage" },
    { name: "Admin Dashboard", link: "/AdminDashboard" },
    { name: "Contact", link: "/ContactPage" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Branding */}
        <div className="text-2xl font-semibold text-gray-800">
          Frontline Worker Support AI
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link
            href="/RequestSupport"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Request Support
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-700 focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-3 text-gray-700">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
            <li>
              <Link
                href="/RequestSupport"
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Request Support
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default FrontLineNavbar;
