import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense, addIncome } from "../../../redux/incomeSlice";

import { v4 as uuidv4 } from "uuid";

export default function IcomesInput() {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    operation: "add",
    description: "",
    amount: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.operation === "add") {
      dispatch(
        addIncome({
          id: uuidv4(),
          description: value.description,
          amount: value.amount
        })
      );
    } else if (value.operation === "remove") {
      dispatch(
        addExpense({
          id: uuidv4(),
          description: value.description,
          amount: value.amount
        })
      );
    }
    setValue({
      operation: "add",
      description: "",
      amount: ""
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-4/5 mx-auto py-4 bg-gray-100 space-y-2 md:space-y-0 md:flex justify-evenly items-center rounded-lg">
        <div>
          <select
            value={value.operation}
            // className="p-2 border rounded-sm rounded-lg outline-none"
            className={`p-2 border rounded-sm rounded-lg outline-none 
              ${
                value.operation === "add"
                  ? `border border-green-400`
                  : `border border-red-400`
              } `}
            onChange={(e) => setValue({ ...value, operation: e.target.value })}
          >
            <option value="add">+</option>
            <option value="remove">-</option>
          </select>
        </div>
        <div>
          <input
            value={value.description}
            type="text"
            placeholder="enter description"
            className={`py-2 px-2 rounded-lg outline-none ${
              value.operation === "add"
                ? `border border-green-400`
                : `border border-red-400`
            } `}
            onChange={(e) =>
              setValue({ ...value, description: e.target.value })
            }
          />
        </div>
        <div>
          <input
            value={value.amount}
            type="text"
            placeholder="0"
            className={`py-2 px-2 rounded-lg outline-none ${
              value.operation === "add"
                ? `border border-green-400`
                : `border border-red-400`
            }`}
            onChange={(e) => setValue({ ...value, amount: e.target.value })}
          />
        </div>
        <div
          className={`text-2xl cursor-pointer hover:text-blue-200 ${
            value.operation === "add" ? `text-green-400` : `text-red-400`
          }`}
        >
          <button type="submit">
            <i className="far fa-check-circle "></i>
          </button>
        </div>
      </div>
    </form>
  );
}
