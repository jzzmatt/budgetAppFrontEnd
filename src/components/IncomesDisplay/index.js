import React from "react";
import Incomes from "./Incomes";
import Expenses from "./Expenses";
export default function IncomesDisplay() {
  return (
    <div className="mt-8 container w-4/5 mx-auto flex justify-between">
      <div className="w-2/5">
        <h2 className="text-center pb-2">INCOMES</h2>
        <Incomes />
      </div>
      <div className="w-2/5">
        <h2 className="text-center pb-2">EXPENSES</h2>
        <Expenses />
      </div>
    </div>
  );
}
