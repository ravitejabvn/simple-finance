import { ILoanDetails } from "./loanDetails";
import { ILoans } from "./loans";

export interface ILoanGrid {
  rowData: ILoans[];
  selectedUser: ILoanDetails;
}
