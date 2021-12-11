import { combineReducers } from "redux";
import { BudgetReducer } from "./budgetReducer";
import { CollateralReducer } from "./collateralReducer";
import { LoanReducer } from "./loanReducer";

export const createRootReducer = () => {
  const rootReducer = combineReducers({
    loans: LoanReducer,
    budgetDetails: BudgetReducer,
    collateralDetails: CollateralReducer,
  });
  return rootReducer;
};
