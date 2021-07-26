import React from "react";

export default function IcomesDashboard() {
  return (
    <div className="w-1/2 md:w-1/4 mx-auto space-y-2 mb-4">
      <div className="border border-gray-100 py-4 bg-green-200 rounded-lg flex justify-evenly">
        <span className="block font-bold">income</span>
        <span className="block text-green-300 text-xl">+0.0</span>
        <span className="block text-white">%0.0</span>
      </div>
      <div className="border border-gray-100 py-4 bg-red-200 rounded-lg flex justify-evenly">
        <span className="block font-bold">expenses</span>
        <span className="block text-red-300 text-xl">-0.0</span>
        <span className="block text-white">%0.0</span>
      </div>
    </div>
  );
}
