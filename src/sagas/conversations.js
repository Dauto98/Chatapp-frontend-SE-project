import { put, call, debounce, fork, race, take, delay, cancel, all } from "redux-saga/effects";
import { normalize } from "normalizr";

import { startFetchConversationRequest, receiveConversation, endFetchConversationRequest } from "../actions/conversationActions.js";

import * as actionTypes from "../constants/actionTypes.js";
import { convSchema } from "../constants/schema.js";

function* fetchCoversationTask() {
  while (true) {
    let action = yield take(actionTypes.REQUEST_CONVERSATION);
    let lastTask;
    yield put(startFetchConversationRequest());

    while (true) {
      const { debounced, _action } = yield race({
        debounced: delay(1000),
        _action: take(actionTypes.REQUEST_CONVERSATION)
      });

      if (debounced) {
        if (lastTask) {
          yield cancel(lastTask);
        }
        lastTask = yield fork(fetchConversation, action);
        break;
      }

      action = _action;
    }
    yield put(endFetchConversationRequest(action.filter));
  }
}

const fakeCovn = Promise.resolve([
  {
    id: "3e56bacd-d8ec-469e-ade0-6d133bcbb6eb",
    lastReplyTime: "1558368649000",
    user: [
      {
        id: "babf74a1-cf1b-4d3f-ab67-f1b8f78ccceb",
        avatar: "",
        username: "Fat cat",
        seen: true
      }
    ],
    snippet: "1 thận ăn 3 thận"
  },
  {
    id: "3e56bacd-d8ec-469e-ade0-6d133basdnux",
    lastReplyTime: "1558362182000",
    user: [
      {
        id: "babf74a1-cf1b-4d3f-ab70-f1b8f78ccceb",
        avatar: "",
        username: "Co Tich",
        seen: false
      }
    ],
    snippet: "ơ kìa tao là trò đùa của mày đấy à ?"
  }
]);

function* fetchConversation(action) {
  try {
    let filterStirng = `?limit=${action.filter.limit || 10}`;
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
    const data = yield fakeCovn;
    yield put(receiveConversation(normalize(data, [convSchema]), action.filter));
  } catch (e) {
    console.error(e);
  }
}

export default function* rootConv() {
  yield all([
    fork(fetchCoversationTask)
  ]);
}
