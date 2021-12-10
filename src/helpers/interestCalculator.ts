import { ILoans } from "../models/loans";

const enum propAreaEnum {
  Urban = "Urban",
  Rural = "Rural",
  Semiurban = "Semiurban",
}

const enum propTypeEnum {
  House = "House",
  Land = "Land",
  Commercial = "Commercial",
}

export const interestCalc = (userDetails: ILoans) => {
  const { Property_Area, Property_Type, LoanAmount, Loan_Amount_Term } =
    userDetails;
  let interestRate = 6.9;
  switch (Property_Area) {
    case propAreaEnum.Urban: {
      if (Property_Type === propTypeEnum.Commercial) interestRate = 9.8;
      break;
    }
    case propAreaEnum.Rural: {
      if (Property_Type === propTypeEnum.Commercial) interestRate = 10.2;
      interestRate = 7.5;
      break;
    }
    case propAreaEnum.Semiurban: {
      if (Property_Type === propTypeEnum.Commercial) interestRate = 10.0;
      interestRate = 7.2;
      break;
    }
    default:
      interestRate = 6.9;
      break;
  }

  const ratePerMonth = interestRate / 1200;
  const ratePlusOne = 1 + ratePerMonth;
  const monthCalc = Math.pow(ratePlusOne, Loan_Amount_Term);
  const lastMonthCalc = monthCalc - 1;
  const monthlyEMI = LoanAmount * ratePerMonth * (monthCalc / lastMonthCalc);
  const totalAmount = monthlyEMI * Loan_Amount_Term;

  return {
    interestRate,
    monthlyEMI,
    ratePerMonth,
    totalAmount,
  };
};
