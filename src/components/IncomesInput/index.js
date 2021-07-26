import React from "react";

export default function IcomesInput() {
  return (
    <div className="w-4/5 mx-auto py-4 bg-gray-100 space-y-2 md:space-y-0 md:flex justify-evenly items-center rounded-lg">
      <div>
        <select className="p-2 border rounded-sm rounded-lg outline-none">
          <option className="add__type-inc">+</option>
          <option className="add__type-exp">-</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="enter description"
          className="py-2 px-2 rounded-lg outline-none"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="0"
          className="py-2 px-2 rounded-lg outline-none"
        />
      </div>
      <div className="text-2xl text-green-400 cursor-pointer hover:text-blue-200 duration-200">
        <i className="far fa-check-circle "></i>
      </div>
    </div>
  );
}
