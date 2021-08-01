import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIncomePerc, formatValue } from "../../tools";

import { removeExpense } from "../../../redux/incomeSlice";

export default function Expenses() {
  const dispatch = useDispatch();
  const { expenses, total_incomes, total_expenses } = useSelector(
    (state) => state.incomeStore
  );

  return expenses.map((expense) => {
    return (
      <div
        key={expense.id}
        className="border-t-2 border-gray-100 flex justify-between py-2"
      >
        <p>{expense.description}</p>
        <p className="hover:-translate-x-8 transform duration-200">
          {formatValue(expense.amount)}
        </p>
        <p>
          {total_expenses
            ? Math.round(
                getIncomePerc(expense.amount, total_incomes, total_expenses)
              )
            : 0.0}{" "}
          %
        </p>
        <button
          type="submit"
          className="text-red-400 cursor-pointer"
          onClick={(e) => dispatch(removeExpense(expense.id))}
        >
          <i className="far fa-times-circle"></i>
        </button>
      </div>
    );
  });
}

/*
 {total_expenses
            ? Math.round(
                getIncomePerc(getTotal(expenses), total_incomes, total_expenses)
              )
            : 0.0}
 */
