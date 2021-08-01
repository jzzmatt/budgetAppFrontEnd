import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeIncome } from "../../../redux/incomeSlice";
import { formatValue } from "../../tools";

export default function Incomes() {
  const dispatch = useDispatch();
  const { incomes } = useSelector((state) => state.incomeStore);

  //console.log(incomes);

  return incomes.map((income) => {
    return (
      <div
        key={income.id}
        className="border-t-2 border-gray-100 flex justify-between py-2"
      >
        <p>{income.description}</p>
        <p className="hover:-translate-x-8 transform duration-200">
          {formatValue(income.amount)}
        </p>
        <button
          type="submit"
          className="text-red-400 cursor-pointer"
          onClick={(e) => dispatch(removeIncome(income.id))}
        >
          <i className="far fa-times-circle"></i>
        </button>
      </div>
    );
  });
}
