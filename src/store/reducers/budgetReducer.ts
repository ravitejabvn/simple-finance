import { IBudgetDetails } from "../../models/budgetDetails";
import { FinanceActions } from "../actions";

export const BudgetReducer = (
  state: IBudgetDetails = { applicantIncome: 0, coApplicantIncome: 0 },
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case FinanceActions.SET_BUDGET_DATA: {
      const { applicantIncome, coApplicantIncome } = action.payload;
      return { ...state, applicantIncome, coApplicantIncome };
    }
    default:
      return state;
  }
};
