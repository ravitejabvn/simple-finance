import React from "react";
import { CardStyles } from "./styles";

export const BudgetCard = () => {
  return (
    <CardStyles>
      Budget Details

      <div className="flex-container">
        <div className="d-block">
          <div>Income</div>
          <div>123</div>
        </div>
        <div className="d-block">
          <div>Co-Applicant Income</div>
          <div>123</div>
        </div>
      </div>
      <div className="flex-container">
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
      </div>
    </CardStyles>
  );
};
