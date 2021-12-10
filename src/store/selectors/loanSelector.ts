import { IStoreState } from "../state";
import { createSelector } from "reselect";

const loansState = (state: IStoreState) => state.loans;

export const loansSelector = createSelector(loansState, (item) => item.rowData);
export const selectedUserSelector = createSelector(
  loansState,
  (item) => item.selectedUser
);
