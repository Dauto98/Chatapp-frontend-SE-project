import * as actionTypes from "../constants/actionTypes.js";

export const fetchConversation = (filter = { query: "", offset: 0, limit: 10 }) => ({
  type: actionTypes.REQUEST_CONVERSATION,
  filter
});

export const startFetchConversationRequest = () => ({
  type: actionTypes.START_FETCH_CONVERSATION,
});

export const endFetchConversationRequest = () => ({
  type: actionTypes.END_FETCH_CONVERSATION,
});

export const receiveConversation = (normalized, filter) => ({
  type: actionTypes.RECEIVE_CONVERSATION,
  normalized,
  filter
});

export const changeConversation = (id) => ({
  type: actionTypes.CHANGE_CONVERSATION,
  id
});
