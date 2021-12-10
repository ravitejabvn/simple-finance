import { ILoanDetails } from "../../models/loanDetails";
import { ILoanGrid } from "../../models/loanGrid";
import { ILoans } from "../../models/loans";
import { FinanceActions } from "../actions";

export const BudgetReducer = (
  state: ILoanGrid = { rowData: [] as ILoans[], selectedUser: {} as ILoanDetails },
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case FinanceActions.GET_LOANS_DATA: {
      return { ...state, rowData: action.payload.rowData };
    }
    default:
      return { state };
  }
};
