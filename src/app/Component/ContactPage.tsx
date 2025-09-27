"use client";

import React from "react";

function Contact() {
  return (
    <div className="max-w-3xl mx-auto bg-blue-900/90 text-white shadow-lg rounded-2xl p-10 mt-12">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-3">Contact Us</h2>
      <p className="text-blue-100 text-center mb-10">
        Have questions or suggestions? Reach out to our team directly.
      </p>

      {/* Contact Info */}
      <div className="bg-blue-800/60 p-8 rounded-xl shadow-md space-y-4 text-center">
        <h3 className="text-2xl font-semibold mb-4">Our Info</h3>
        <p className="text-lg">📧 support@frontline-ai.com</p>
        <p className="text-lg">📞 +92-300-0000000</p>
        <p className="text-lg">📍 Islamabad, Pakistan</p>

        <div className="mt-6">
          <p className="font-medium">🏆 Hackathon Team</p>
          <p className="text-blue-200">Innovista</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

