import React from "react";
import { useSelector } from "react-redux";
import { collateralSelector } from "../../store/selectors/loanSelector";
import { CardStyles } from "./styles";

export const CollateralCard = () => {
  const collateralDetails = useSelector(collateralSelector);
  return (
    <CardStyles>
      Collateral Details
      <div className="flex-container">
        <div className="d-block">
          <div>Property Location</div>
          <div>{collateralDetails.propLocation}</div>
        </div>
        <div className="d-block">
          <div>Type</div>
          <div>{collateralDetails.propType}</div>
        </div>
      </div>
      <div className="flex-container">
        <div className="d-block">
          <div>Area (sq.ft)</div>
          <div>123</div>
        </div>
      </div>
      {/* <div className="flex-container">
        <div className="d-block">
          <div>Loan Eligibility</div>
          <div>123</div>
        </div>
        <div className="d-block">
          <div>Mortgage</div>
          <div>123</div>
        </div>
      </div> */}
    </CardStyles>
  );
};
