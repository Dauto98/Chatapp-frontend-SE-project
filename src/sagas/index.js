import { fork, all } from "redux-saga/effects";

import rootAuth from "./authentication.js";
import rootConv from "./conversations.js";
import rootMess from "./messages.js";

export default function* rootSaga() {
  yield all([
    fork(rootAuth),
    fork(rootConv),
    fork(rootMess),
  ]);
}
