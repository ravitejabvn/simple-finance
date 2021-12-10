import React from "react";
import styled from "styled-components";
import { BudgetCard } from "../components/cards/budgetCard";
import { CollateralCard } from "../components/cards/collateralCard";
import { LoanCard } from "../components/cards/loanCard";
import { LoanGrid } from "../components/loansGrid";

export const LandingPage = () => {
  return (
    <LandingPageStyles>
      <div className="flex-block">
        <LoanGrid />
      </div>
      <div className="flex-block mt-5 p-2">
        <LoanCard />
        <BudgetCard />
        <CollateralCard />
      </div>
    </LandingPageStyles>
  );
};

const LandingPageStyles = styled.div`
  background: #e5e5e580;
  height: 100vh;
  .flex-block {
    display: flex;
    justify-content: space-between;
  }
`;
