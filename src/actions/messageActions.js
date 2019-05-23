import * as actionTypes from "../constants/actionTypes.js";

export const fetchMessage = ({ conversationId = "", offset = 0, limit = 20, query = "" } = { conversationId: "", offset: 0, limit: 20, query: "" }) => ({
  type: actionTypes.REQUEST_MESSAGE,
  filter: { conversationId, offset, limit, query }
});

export const receiveMessage = (normalized, conversationId) => ({
  type: actionTypes.RECEIVE_MESSAGE,
  normalized,
  conversationId
});
