import { interestCalc } from "../helpers/interestCalculator";
import { ILoans } from "../models/loans";
import userLoanDetails from "./__mock__/userLoanDetails.json";

test("On valid API response, interest should be calculated", () => {
  // Arrange
  const apiResponse: ILoans = userLoanDetails;

  // Act
  const { interestRate, monthlyEMI, ratePerMonth, totalAmount } =
    interestCalc(apiResponse);

  // Assert
  expect(interestRate).toBe(7.5);
  expect(monthlyEMI).toBe(129.71128348162557);
  expect(ratePerMonth).toBe(0.00625);
  expect(totalAmount).toBe(46696.062053385205);
});
