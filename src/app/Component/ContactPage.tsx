// "use client";

// import React from "react";

// function Contact() {
//   return (
//     <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8 mt-8">
//       {/* Heading */}
//       <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
//         Contact Us
//       </h2>
//       <p className="text-gray-600 text-center mb-8">
//         Have questions or suggestions? Fill out the form below and our team will
//         get back to you.
//       </p>

//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Contact Form */}
//         <form className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Message
//             </label>
//             <textarea
//               placeholder="Write your message..."
//               rows={5}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//               required
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
//           >
//             Send Message
//           </button>
//         </form>

//         {/* Contact Info */}
//         <div className="bg-gray-50 p-6 rounded-lg shadow-inner space-y-3">
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Info</h3>
//           <p className="text-gray-600">📧 support@frontline-ai.com</p>
//           <p className="text-gray-600">📞 +92-300-0000000</p>
//           <p className="text-gray-600">📍 Islamabad, Pakistan</p>
//           <div className="mt-4">
//             <p className="font-medium text-gray-700">🏆 Hackathon Team</p>
//             <p className="text-gray-600">Innovista</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

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

