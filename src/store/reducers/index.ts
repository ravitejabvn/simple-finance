import { combineReducers } from "redux";
import { LoanReducer } from "./loanReducer";

export const createRootReducer = () => {
  const rootReducer = combineReducers({
    loans: LoanReducer,
  });
  return rootReducer;
};
