import { IStoreState } from "../state";
import { createSelector } from "reselect";

const loansState = (state: IStoreState) => state.loans;
const budgetState = (state: IStoreState) => state.budgetDetails;
const collateralState = (state: IStoreState) => state.collateralDetails;

export const loansSelector = createSelector(loansState, (item) => item.rowData);
export const selectedUserSelector = createSelector(
  loansState,
  (item) => item.selectedUser
);
export const budgetSelector = createSelector(budgetState, (item) => item);
export const collateralSelector = createSelector(
  collateralState,
  (item) => item
);
