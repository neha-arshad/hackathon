"use client";

import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Frontline Worker AI</h2>
          <p className="text-sm leading-relaxed">
            A citizen support platform powered by AI agents for healthcare, law
            enforcement, and utilities. Built for the National Agentic AI
            Hackathon.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/admin" className="hover:text-yellow-400">
                Admin
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Contact</h2>
          <p className="text-sm">📧 support@frontlineai.com</p>
          <p className="text-sm">📍 Islamabad, Pakistan</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Frontline Worker Support AI — All Rights
        Reserved.
      </div>
    </footer>
  );
}

export default Footer;
