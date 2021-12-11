import { call, put, takeLatest, select } from "redux-saga/effects";
import { interestCalc } from "../../helpers/interestCalculator";
import { ILoanDetails } from "../../models/loanDetails";
import { ILoans } from "../../models/loans";
import { getLoansData } from "../../services";
import { FinanceActions } from "../actions/";
import { loansSelector, selectedUserSelector } from "../selectors/loanSelector";

function* fetchData() {
  const { data } = yield call(getLoansData);
  yield put({
    type: FinanceActions.SET_LOANS_DATA,
    payload: { rowData: data },
  });
  yield call(getUserDetails, { payload: data[0] });
}

function* getUserDetails(action: any) {
  const data = action.payload;
  const { interestRate, monthlyEMI, totalAmount } = interestCalc(data);

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

  yield put({
    type: FinanceActions.SET_BUDGET_DATA,
    payload: {
      applicantIncome: data.ApplicantIncome,
      coApplicantIncome: data.CoapplicantIncome,
    },
  });

  yield put({
    type: FinanceActions.SET_COLLATERAL_DATA,
    payload: {
      propArea: 0,
      propType: data.Property_Type,
      propLocation: data.Property_Area,
    },
  });
}

function* updateLoansData(action: any) {
  const loansData: ILoans[] = yield select(loansSelector);
  const selectedUser: ILoanDetails = yield select(selectedUserSelector);
  const { userLoanDetails } = action.payload;
  const rowData = loansData.map((loan) => {
    if (loan.User_ID === userLoanDetails.User_ID) return { ...userLoanDetails };
    return { ...loan };
  });
  yield put({
    type: FinanceActions.SET_LOANS_DATA,
    payload: { rowData },
  });

  if (userLoanDetails.User_ID === selectedUser.userName) {
    yield call(getUserDetails, { payload: userLoanDetails });
  }
}

export const loansSaga = [
  takeLatest(FinanceActions.INITIAL_LOAD, fetchData),
  takeLatest(FinanceActions.GET_USER_DATA, getUserDetails),
  takeLatest(FinanceActions.UPDATE_LOANS_DATA, updateLoansData),
];
