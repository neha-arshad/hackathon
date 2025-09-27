// "use client";

// import React from "react";

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 mt-10">
//       <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Column 1 */}
//         <div>
//           <h2 className="font-semibold text-lg mb-3">Frontline Worker AI</h2>
//           <p className="text-sm leading-relaxed">
//             A citizen support platform powered by AI agents for healthcare, law
//             enforcement, and utilities. Built for the National Agentic AI
//             Hackathon.
//           </p>
//         </div>

//         {/* Column 2 */}
//         <div>
//           <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="/" className="hover:text-yellow-400">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="/about" className="hover:text-yellow-400">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="/contact" className="hover:text-yellow-400">
//                 Contact
//               </a>
//             </li>
//             <li>
//               <a href="/admin" className="hover:text-yellow-400">
//                 Admin
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Column 3 */}
//         <div>
//           <h2 className="font-semibold text-lg mb-3">Contact</h2>
//           <p className="text-sm">📧 support@frontlineai.com</p>
//           <p className="text-sm">📍 Islamabad, Pakistan</p>
//         </div>
//       </div>

//       <div className="border-t border-gray-700 text-center py-4 text-sm">
//         © {new Date().getFullYear()} Frontline Worker Support AI — All Rights
//         Reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;
"use client";

import React from "react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 - Brand */}
        <div>
          <h2 className="font-bold text-xl text-white mb-3">
            Frontline Worker AI
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            AI-powered citizen support platform for healthcare, law enforcement,
            and utilities. Built for the National Agentic AI Hackathon.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h2 className="font-semibold text-lg text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/admin" className="hover:text-yellow-400 transition">
                Admin
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact + Social */}
        <div>
          <h2 className="font-semibold text-lg text-white mb-3">
            Get in Touch
          </h2>
          <p className="text-sm text-gray-400 mb-2">
            📧 support@frontlineai.com
          </p>
          <p className="text-sm text-gray-400 mb-4">📍 Islamabad, Pakistan</p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 rounded-full bg-blue-700 hover:bg-yellow-400 hover:text-black transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-blue-700 hover:bg-yellow-400 hover:text-black transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-blue-700 hover:bg-yellow-400 hover:text-black transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-blue-700 hover:bg-yellow-400 hover:text-black transition"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Frontline Worker Support AI — All Rights
        Reserved.
      </div>
    </footer>
  );
}

export default Footer;
