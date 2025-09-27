"use client";

import React from "react";
import { FaBolt, FaHeartbeat, FaGavel } from "react-icons/fa";

const AdminDashboard = () => {
  // Sample data (mock)
  const stats = [
    {
      name: "Utility Requests",
      count: 45,
      icon: <FaBolt className="text-yellow-400 text-3xl" />,
    },
    {
      name: "Health Requests",
      count: 30,
      icon: <FaHeartbeat className="text-red-500 text-3xl" />,
    },
    {
      name: "Criminal Reports",
      count: 15,
      icon: <FaGavel className="text-gray-700 text-3xl" />,
    },
  ];

  const latestRequests = [
    {
      id: 101,
      type: "Utility",
      description: "Electricity outage in Block A",
      status: "Pending",
    },
    {
      id: 102,
      type: "Health",
      description: "Medical assistance required",
      status: "In Progress",
    },
    {
      id: 103,
      type: "Criminal",
      description: "Report of theft in Sector 5",
      status: "Resolved",
    },
  ];

  return (
    <div className="font-sans min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 hover:shadow-2xl transition-shadow"
          >
            {stat.icon}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {stat.name}
              </h2>
              <p className="text-gray-600 text-lg">{stat.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Requests Table */}
      <div className="bg-white shadow-lg rounded-xl p-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Latest Requests
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-3 text-gray-600">ID</th>
              <th className="border-b p-3 text-gray-600">Type</th>
              <th className="border-b p-3 text-gray-600">Description</th>
              <th className="border-b p-3 text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {latestRequests.map((req) => (
              <tr key={req.id} className="hover:bg-gray-100 transition-colors">
                <td className="border-b p-3">{req.id}</td>
                <td className="border-b p-3">{req.type}</td>
                <td className="border-b p-3">{req.description}</td>
                <td
                  className={`border-b p-3 font-semibold ${
                    req.status === "Pending"
                      ? "text-yellow-500"
                      : req.status === "In Progress"
                      ? "text-blue-500"
                      : "text-green-500"
                  }`}
                >
                  {req.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
