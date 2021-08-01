import React from "react";
import { useSelector } from "react-redux";
import { formatValue } from "../../tools";

export default function SummaryDashBoard() {
  const { total_incomes, total_expenses } = useSelector(
    (state) => state.incomeStore
  );
  const date = new Date();

  return (
    <>
      <h1 className="font-bold mb-4">{date.toDateString()}</h1>
      <p className="text-4xl mb-4">
        {total_incomes ? formatValue(total_incomes - total_expenses) : 0.0}
      </p>
    </>
  );
}
