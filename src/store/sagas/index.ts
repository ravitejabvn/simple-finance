import { all } from "redux-saga/effects";
import { loansSaga } from "./loansSaga";

export function* rootSaga() {
  yield all([...loansSaga]);
}
