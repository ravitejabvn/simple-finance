import { ICollateralDetails } from "../../models/collateralDetails";
import { FinanceActions } from "../actions";

export const CollateralReducer = (
  state: ICollateralDetails = { propArea: 0, propType: "", propLocation: "" },
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case FinanceActions.SET_COLLATERAL_DATA: {
      const { propArea, propType, propLocation } = action.payload;
      return { ...state, propArea, propType, propLocation };
    }
    default:
      return state;
  }
};
