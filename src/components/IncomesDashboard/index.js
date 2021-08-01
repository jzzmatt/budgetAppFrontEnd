import React from "react";
import { useSelector } from "react-redux";
import { getTotal, getIncomePerc, formatValue } from "../../tools";

export default function IcomesDashboard() {
  const { expenses, total_incomes, total_expenses } = useSelector(
    (state) => state.incomeStore
  );

  // const getIncomePerc = (value) => {
  //   const total = total_incomes - total_expenses;
  //   return (value / total) * 100;
  // };

  return (
    <div className="w-1/2 md:w-1/4 mx-auto space-y-2 mb-4">
      <div className="border border-gray-100 py-4 bg-green-200 rounded-lg flex justify-evenly">
        <span className="block font-bold">income</span>
        <span className="block text-green-300 text-xl">
          {total_incomes ? formatValue(total_incomes) : 0.0}
        </span>
        <span className="block text-white">{""}</span>
      </div>
      <div className="border border-gray-100 py-4 bg-red-200 rounded-lg flex justify-evenly">
        <span className="block font-bold">expenses</span>
        <span className="block text-red-300 text-xl">
          {total_expenses ? formatValue(total_expenses) : 0.0}
        </span>
        <span className="block text-white">
          %{" "}
          {total_expenses
            ? Math.round(
                getIncomePerc(getTotal(expenses), total_incomes, total_expenses)
              )
            : 0.0}
        </span>
      </div>
    </div>
  );
}
