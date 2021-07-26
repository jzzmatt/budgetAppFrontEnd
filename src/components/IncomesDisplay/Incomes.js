import React from "react";

export default function Incomes() {
  return (
    <div className="border-t-2 border-gray-100 flex justify-between py-2">
      <p>house</p>
      <p className="hover:-translate-x-8 transform duration-200">+1,000</p>
      <div className="text-red-400 hidden">
        <i className="far fa-times-circle"></i>
      </div>
    </div>
  );
}
