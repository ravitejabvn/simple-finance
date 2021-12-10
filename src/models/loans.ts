export interface ILoans {
  User_ID: string;
  Loan_ID: string;
  Gender: string;
  Married: string;
  Dependents: number | string;
  Education: string;
  Self_Employed: string;
  ApplicantIncome: number;
  CoapplicantIncome: number;
  LoanAmount: number;
  Loan_Amount_Term: number;
  Loan_Paid_Term: number;
  Credit_History: number | string;
  Property_Type: string;
  Property_Area: string;
  Loan_Status: string;
}
