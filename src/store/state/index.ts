import { IBudgetDetails } from "../../models/budgetDetails";
import { ICollateralDetails } from "../../models/collateralDetails";
import { ILoanGrid } from "../../models/loanGrid";

export interface IStoreState {
  loans: ILoanGrid;
  budgetDetails: IBudgetDetails;
  collateralDetails: ICollateralDetails;
}
