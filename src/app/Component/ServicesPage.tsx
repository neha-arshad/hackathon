// "use client";

// import React from "react";
// import { FaBolt, FaHeartbeat, FaGavel } from "react-icons/fa";

// const ServicesPage = () => {
//   const services = [
//     {
//       name: "Utility Support",
//       description:
//         "Report and track electricity, gas, and water-related issues quickly.",
//       icon: <FaBolt className="text-yellow-400 text-6xl mb-4" />,
//     },
//     {
//       name: "Health Support",
//       description:
//         "Request medical help or check hospital availability in real-time.",
//       icon: <FaHeartbeat className="text-red-500 text-6xl mb-4" />,
//     },
//     {
//       name: "Criminal Support",
//       description:
//         "Report crimes, emergencies, and get assistance from authorities.",
//       icon: <FaGavel className="text-gray-700 text-6xl mb-4" />,
//     },
//   ];

//   return (
//     <div className="font-sans bg-gray-50 min-h-screen py-16 px-6">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
//           Our Services
//         </h1>
//         <p className="text-lg text-gray-600">
//           Explore the services we provide to support citizens efficiently.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {services.map((service) => (
//           <div
//             key={service.name}
//             className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition-shadow"
//           >
//             {service.icon}
//             <h2 className="text-2xl font-semibold mb-3 text-gray-800">
//               {service.name}
//             </h2>
//             <p className="text-gray-600">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;

// "use client";

// import React from "react";
// import { FaBolt, FaHeartbeat, FaGavel } from "react-icons/fa";

// const ServicesPage = () => {
//   const services = [
//     {
//       name: "Utility Support",
//       description:
//         "Report and track electricity, gas, and water-related issues quickly.",
//       icon: <FaBolt className="text-yellow-400 text-6xl mb-4" />,
//     },
//     {
//       name: "Health Support",
//       description:
//         "Request medical help or check hospital availability in real-time.",
//       icon: <FaHeartbeat className="text-red-500 text-6xl mb-4" />,
//     },
//     {
//       name: "Criminal Support",
//       description:
//         "Report crimes, emergencies, and get assistance from authorities.",
//       icon: <FaGavel className="text-blue-400 text-6xl mb-4" />,
//     },
//   ];

//   return (
//     <div className="font-sans bg-gradient-to-b from-blue-900 via-blue-950 to-black min-h-screen py-16 px-6 text-white">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h1 className="text-5xl font-extrabold mb-4 text-white">
//           Our Services
//         </h1>
//         <p className="text-lg text-gray-300">
//           Explore the services we provide to support citizens efficiently.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {services.map((service) => (
//           <div
//             key={service.name}
//             className="bg-gradient-to-br from-blue-900 to-blue-800 shadow-lg rounded-xl p-8 text-center 
//                        hover:shadow-2xl transition-all duration-300 hover:scale-105"
//           >
//             {service.icon}
//             <h2 className="text-2xl font-semibold mb-3 text-white">
//               {service.name}
//             </h2>
//             <p className="text-gray-300">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;

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
