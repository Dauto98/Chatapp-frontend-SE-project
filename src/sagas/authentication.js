import { put, takeEvery } from "redux-saga/effects";

import * as actionTypes from "../constants/actionTypes.js";

export function* register() {
  yield takeEvery(actionTypes.REGISTER_ACCOUNT, registerHandler);
}

export function* login() {
  yield takeEvery(actionTypes.LOGIN, loginHandler);
}

function* registerHandler(action) {
  console.log(action);
}

function* loginHandler(action) {
  console.log(action);
}
