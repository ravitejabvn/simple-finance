import React from "react";
import { CardStyles } from "./styles";

export const CollateralCard = () => {
  return (
    <CardStyles>
      Collateral Details
      <div className="flex-container">
        <div className="d-block">
          <div>Property Location</div>
          <div>123</div>
        </div>
        <div className="d-block">
          <div>Type</div>
          <div>123</div>
        </div>
      </div>
      <div className="flex-container">
        <div className="d-block">
          <div>Area (sq.ft)</div>
          <div>123</div>
        </div>
      </div>
      <div className="flex-container">
        <div className="d-block">
          <div>Loan Eligibility</div>
          <div>123</div>
        </div>
        <div className="d-block">
          <div>Mortgage</div>
          <div>123</div>
        </div>
      </div>
    </CardStyles>
  );
};
