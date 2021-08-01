import { configureStore } from "@reduxjs/toolkit";
import incomesReducer from "./incomeSlice";

export default configureStore({
  reducer: {
    incomeStore: incomesReducer
  }
});
