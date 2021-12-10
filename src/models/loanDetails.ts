export interface ILoanDetails {
  userName: string;
  loanAmount: number;
  loanAmountTerm: number;
  loanPaidTerm: number;
  interest?: any;
  monthlyEmi?: number;
  totalAmount?: number;
}
