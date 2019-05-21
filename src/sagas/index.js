import { fork, all } from "redux-saga/effects";

import rootAuth from "./authentication.js";
import rootConv from "./conversations.js";

export default function* rootSaga() {
  yield all([
    fork(rootAuth),
    fork(rootConv),
  ]);
}
