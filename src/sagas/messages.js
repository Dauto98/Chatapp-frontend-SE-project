import { takeLeading, put, call, debounce, fork, race, take, delay, cancel, all } from "redux-saga/effects";
import { normalize } from "normalizr";

import { receiveMessage } from "../actions/messageActions.js";

import * as actionTypes from "../constants/actionTypes.js";
import { messageSchema } from "../constants/schema.js";

function* fetchMessageTask() {
  yield takeLeading(actionTypes.REQUEST_MESSAGE, fetchMessage);
}

const fakeMess = Promise.resolve([
  {
    id: "1312312e",
    conversationId: "3e56bacd-d8ec-469e-ade0-6d133bcbb6eb",
    sender: "213123wd",
    content: "Em có muốn làm giàu ko?",
    sendTime: "1558368649000"
  },
  {
    id: "2",
    conversationId: "3e56bacd-d8ec-469e-ade0-6d133bcbb6eb",
    sender: "c8ceb287-6b4f-4b85-9292-bc0b42202d7e",
    content: "Có ước mơ đổi đời ko?",
    sendTime: "1558372349000"
  },
  {
    id: "3",
    conversationId: "3e56bacd-d8ec-469e-ade0-6d133bcbb6eb",
    sender: "c8ceb287-6b4f-4b85-9292-bc0b42202d7e",
    content: "Vừa làm kinh tế, vừa thỏa đam mê",
    sendTime: "1558372549000"
  },
  {
    id: "4",
    conversationId: "3e56bacd-d8ec-469e-ade0-6d133bcbb6eb",
    sender: "213123wd",
    content: "Thậm chí hàng tháng còn có 1 khoản gửi về cho gia đình",
    sendTime: "1558374549000"
  },
  {
    id: "5",
    conversationId: "3e56bacd-d8ec-469e-ade0-6d133bcbb6eb",
    sender: "213123wd",
    content: "Tôi đã lừa anh em bao giờ chưa?",
    sendTime: "1558379549000"
  }
]);


function* fetchMessage(action) {
  try {
    if (action.filter.conversationId) {
      let filterStirng = `?conversationId=${action.filter.conversationId}limit=${action.filter.limit || 20}`;
      if (action.filter.query) {
        filterStirng += `&query=${action.filter.query}`;
      }
      if (action.filter.offset) {
        filterStirng += `&offset=${action.filter.offset}`;
      }
      // const res = yield call(fetch, `/api/conversation${filterStirng}`);
      // if (res.ok) {
      //   const data = yield call([res, res.json]);
      //   yield put(receiveConversation(data.token));
      // }
      const data = yield fakeMess;
      yield put(receiveMessage(normalize(data, [messageSchema]), action.filter.conversationId));
    }
  } catch (e) {
    console.error(e);
  }
}

export default function* rootMess() {
  yield all([
    fork(fetchMessageTask)
  ]);
}
