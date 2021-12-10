import React from "react";
import { useSelector } from "react-redux";
import { selectedUserSelector } from "../../store/selectors/loanSelector";
import { CardStyles } from "./styles";

export const LoanCard = () => {
  const selectedUser = useSelector(selectedUserSelector);

  return (
    <CardStyles>
      Loan Details
      {selectedUser && selectedUser.userName && (
        <>
          <div>
            <div>User Name: {selectedUser.userName}</div>
          </div>
          <div className="flex-container">
            <div className="d-block">
              <div>Loan Amount</div>
              <div>{selectedUser.loanAmount}</div>
            </div>
            <div className="d-block">
              <div>Total Amount</div>
              <div>{selectedUser.totalAmount}</div>
            </div>
          </div>
          <div className="flex-container">
            <div className="d-block">
              <div>Tenure</div>
              <div>{selectedUser.loanAmountTerm}</div>
            </div>
            <div className="d-block">
              <div>Remaining Tenure</div>
              <div>
                {selectedUser.loanAmountTerm - selectedUser.loanPaidTerm}
              </div>
            </div>
          </div>
          <div className="flex-container">
            <div className="d-block">
              <div>Interest</div>
              <div>{selectedUser.interest}%</div>
            </div>
            <div className="d-block">
              <div>Monthly EMI</div>
              <div>{selectedUser.monthlyEmi}</div>
            </div>
          </div>
        </>
      )}
    </CardStyles>
  );
};
