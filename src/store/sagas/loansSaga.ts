import { call, put, takeLatest } from "redux-saga/effects";
import { interestCalc } from "../../helpers/interestCalculator";
import { ILoanDetails } from "../../models/loanDetails";
import { getLoansData } from "../../services";
import { FinanceActions } from "../actions/";

function* fetchData() {
  const { data } = yield call(getLoansData);
  yield put({
    type: FinanceActions.GET_LOANS_DATA,
    payload: { rowData: data },
  });
  yield call(getUserDetails, { payload: data[0] });
}

function* getUserDetails(action: any) {
  const data = action.payload;
  const { interestRate, monthlyEMI, ratePerMonth, totalAmount } =
    interestCalc(data);

  const userData = {
    userName: data.User_ID,
    loanAmount: data.LoanAmount,
    loanAmountTerm: data.Loan_Amount_Term,
    loanPaidTerm: data.Loan_Paid_Term,
    interest: interestRate,
    monthlyEmi: Math.round(monthlyEMI),
    totalAmount: Math.round(totalAmount),
  } as ILoanDetails;
  yield put({
    type: FinanceActions.SET_USER_DATA,
    payload: { selectedUser: userData },
  });
}

export const loansSaga = [
  takeLatest(FinanceActions.INITIAL_LOAD, fetchData),
  takeLatest(FinanceActions.GET_USER_DATA, getUserDetails),
];
