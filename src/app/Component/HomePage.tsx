// import React from "react";
// import { FaBolt, FaHeartbeat, FaTint } from "react-icons/fa";

// const HomePage = () => {
//   return (
//     <div className="font-sans">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24 px-6 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Frontline Worker Support AI
//         </h1>
//         <p className="text-lg md:text-xl mb-6">
//           Helping citizens connect to essential services quickly and
//           efficiently.
//         </p>
//         <a
//           href="#services"
//           className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition-colors"
//         >
//           Request Support
//         </a>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-16 px-6 max-w-7xl mx-auto">
//         <h2 className="text-3xl font-semibold text-center mb-12">
//           Our Services
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
//             <FaBolt className="text-4xl mx-auto mb-4 text-yellow-500" />
//             <h3 className="text-xl font-semibold mb-2">Electricity Issues</h3>
//             <p>Report and track electricity-related problems in your area.</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
//             <FaHeartbeat className="text-4xl mx-auto mb-4 text-red-500" />
//             <h3 className="text-xl font-semibold mb-2">Health Support</h3>
//             <p>
//               Request medical help or check hospital availability in real-time.
//             </p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
//             <FaTint className="text-4xl mx-auto mb-4 text-blue-500" />
//             <h3 className="text-xl font-semibold mb-2">Water Supply</h3>
//             <p>Report water supply issues and track resolutions quickly.</p>
//           </div>
//         </div>
//       </section>

//       {/* Departments Section */}
//       <section className="bg-gray-50 py-16 px-6">
//         <h2 className="text-3xl font-semibold text-center mb-12">
//           Departments
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           <div className="text-center">
//             <h3 className="text-xl font-semibold mb-2">Electricity</h3>
//             <p>
//               Manage and monitor all electricity-related requests efficiently.
//             </p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-xl font-semibold mb-2">Health</h3>
//             <p>
//               Coordinate medical support for citizens and frontline workers.
//             </p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-xl font-semibold mb-2">Water</h3>
//             <p>Track water supply issues and ensure prompt resolution.</p>
//           </div>
//         </div>
//       </section>

//       {/* Track Request Section */}
//       <section className="py-16 px-6 max-w-md mx-auto">
//         <h2 className="text-3xl font-semibold text-center mb-8">
//           Track Your Request
//         </h2>
//         <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
//           <input
//             type="text"
//             placeholder="Enter Request ID"
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
//           >
//             Track Request
//           </button>
//         </form>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8 mt-16">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <p>&copy; 2025 Frontline Worker Support AI. All rights reserved.</p>
//           <p className="mt-2">
//             Contact:{" "}
//             <a href="mailto:support@fwai.com" className="text-blue-400">
//               support@fwai.com
//             </a>
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

// import React from "react";
// import { FaBolt, FaHeartbeat, FaTint } from "react-icons/fa";

// const HomePage = () => {
//   return (
//     <div className="font-sans">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32 px-6 text-center relative overflow-hidden">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//             Frontline Worker Support AI
//           </h1>
//           <p className="text-lg md:text-xl mb-8 text-gray-200">
//             Helping citizens connect to essential services quickly and
//             efficiently.
//           </p>
//           <a
//             href="/services"
//             className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//           >
//             Request Support
//           </a>
//         </div>

//         {/* Decorative Icons */}
//         <FaBolt className="absolute top-10 left-10 text-yellow-400 text-6xl opacity-20 animate-bounce" />
//         <FaHeartbeat className="absolute bottom-20 right-10 text-red-400 text-7xl opacity-20 animate-pulse" />
//         <FaTint className="absolute top-1/2 left-1/4 text-blue-400 text-8xl opacity-15" />
//       </section>
//     </div>
//   );
// };

// export default HomePage;


// "use client";

// import React, { useState } from "react";
// import { FaBolt, FaHeartbeat, FaGavel } from "react-icons/fa";

// const HomePage = () => {
//   const [query, setQuery] = useState("");
//   const [response, setResponse] = useState<any>(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:8000/agent", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ query }),
//       });

//       const data = await res.json();
//       setResponse(data);
//     } catch (err) {
//       setResponse({ error: "⚠️ Backend se connect nahi ho paya." });
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="font-sans">
//       {/* Hero + Query Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32 px-6 text-center relative overflow-hidden">
//         <div className="max-w-5xl mx-auto">
//           {/* Heading */}
//           <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
//             Frontline Worker Support AI
//           </h1>
//           <p className="text-xl md:text-2xl mb-12 text-gray-200 drop-shadow-sm">
//             Helping citizens connect to essential services quickly and
//             efficiently.
//           </p>

//           {/* Citizen Query Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col md:flex-row gap-4 justify-center mb-6"
//           >
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="e.g. Electricity issue in my area"
//               className="flex-1 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 font-semibold transition-all"
//             >
//               Request Support
//             </button>
//           </form>

//           {loading && <p className="text-gray-200 mt-2">⏳ Processing...</p>}
//           {response && (
//             <div className="bg-white text-gray-800 shadow rounded p-4 border border-gray-200 mt-4 max-w-xl mx-auto">
//               <h3 className="font-semibold mb-2">Response:</h3>
//               <pre className="whitespace-pre-wrap text-sm">
//                 {JSON.stringify(response, null, 2)}
//               </pre>
//             </div>
//           )}
//         </div>

//         {/* Decorative Background Icons */}
//         <FaBolt className="absolute top-5 left-5 text-yellow-400 text-8xl opacity-20 animate-bounce" />
//         <FaHeartbeat className="absolute bottom-10 right-10 text-red-400 text-8xl opacity-20 animate-pulse" />
//         <FaGavel className="absolute top-1/2 left-1/4 text-gray-400 text-9xl opacity-10" />
//       </section>
//     </div>
//   );
// };

// export default HomePage;

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
