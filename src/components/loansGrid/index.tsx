import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { loansSelector } from "../../store/selectors/loanSelector";
import { FinanceActions } from "../../store/actions";
import { CellClickedEvent, NewValueParams } from "ag-grid-community";

export const LoanGrid = () => {
  const dispatch = useDispatch();
  const rowData = useSelector(loansSelector);

  useEffect(() => {
    if (!rowData.length) {
      dispatch({
        type: FinanceActions.INITIAL_LOAD,
      });
    }
  }, [rowData]);

  const updateUserDetails = (event: CellClickedEvent) => {
    dispatch({
      type: FinanceActions.GET_USER_DATA,
      payload: event.data,
    });
  };

  const updateLoanTerm = (event: NewValueParams) => {
    const userLoanDetails = event.data;
    dispatch({
      type: FinanceActions.UPDATE_LOANS_DATA,
      payload: {
        userLoanDetails: {
          ...userLoanDetails,
          Loan_Paid_Term: Number(event.newValue),
        },
      },
    });
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact rowData={rowData}>
        <AgGridColumn
          field="User_ID"
          onCellClicked={updateUserDetails}
        ></AgGridColumn>
        <AgGridColumn field="ApplicantIncome"></AgGridColumn>
        <AgGridColumn field="LoanAmount"></AgGridColumn>
        <AgGridColumn field="Loan_Amount_Term"></AgGridColumn>
        <AgGridColumn
          field="Loan_Paid_Term"
          editable={true}
          onCellValueChanged={updateLoanTerm}
        ></AgGridColumn>
        <AgGridColumn field="Property_Type"></AgGridColumn>
        <AgGridColumn field="Property_Area"></AgGridColumn>
        <AgGridColumn field="Loan_Status"></AgGridColumn>
        <AgGridColumn field="Self_Employed"></AgGridColumn>
      </AgGridReact>
    </div>
  );
};
