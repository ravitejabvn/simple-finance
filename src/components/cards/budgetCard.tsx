import React from "react";
import { useSelector } from "react-redux";
import { budgetSelector } from "../../store/selectors/loanSelector";
import { CardStyles } from "./styles";

export const BudgetCard = () => {
  const budgetDetails = useSelector(budgetSelector);

  return (
    <CardStyles>
      Budget Details
      <div className="flex-container">
        <div className="d-block">
          <div>Income</div>
          <div>{budgetDetails.applicantIncome}</div>
        </div>
        <div className="d-block">
          <div>Co-Applicant Income</div>
          <div>{budgetDetails.coApplicantIncome}</div>
        </div>
      </div>
      {/* <div className="flex-container">
        <div className="d-block">
          <div>EMI eligibility</div>
          <div>123</div>
        </div>
        <div className="d-block">
          <div>Savings</div>
          <div>123</div>
        </div>
      </div>
      <div className="flex-container">
        <div className="d-block">
          <div>Others</div>
          <div>123</div>
        </div>
      </div> */}
    </CardStyles>
  );
};
