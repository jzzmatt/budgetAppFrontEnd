import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
  name: "incomeStore",
  initialState: {
    incomes: [],
    expenses: [],
    total_incomes: 0,
    total_expenses: 0
  },
  reducers: {
    addIncome: (state, action) => {
      state.incomes = [action.payload, ...state.incomes];
      state.total_incomes = state.total_incomes + Number(action.payload.amount);
    },
    addExpense: (state, action) => {
      state.expenses = [action.payload, ...state.expenses];
      state.total_expenses =
        state.total_expenses + Number(action.payload.amount);
    },
    removeIncome: (state, action) => {
      //Find Object income
      const incomeObj = state.incomes.find(
        (income) => income.id === action.payload
      );

      state.incomes = state.incomes.filter(
        (income) => income.id !== action.payload
      );

      state.total_incomes = state.total_incomes - Number(incomeObj.amount);
    },
    removeExpense: (state, action) => {
      //Find Object expense
      const expenseObj = state.expenses.find(
        (expense) => expense.id === action.payload
      );

      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );

      state.total_expenses = state.total_expenses - Number(expenseObj.amount);
    }
  }
});

export const {
  addIncome,
  addExpense,
  removeIncome,
  removeExpense
} = incomeSlice.actions;
export default incomeSlice.reducer;
