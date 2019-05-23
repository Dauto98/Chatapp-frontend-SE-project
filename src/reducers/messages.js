import * as actionTypes from "../constants/actionTypes.js";

/**
 * {
 *    ids: {
 *      [conversationId]: [<id>]
 *    },
 *    entities: {
 *      id: {
 *        id: "",
 *        conversationId: "3e56bacd-d8ec-469e-ade0-6d133bcbb6eb",
 *        sender: "213123wd",
 *        content: "Em có muốn làm giàu ko?",
 *        sendTime: "1558368649"
 *      }
 *    }
 * }
 */

const initState = {
  ids: {},
  entities: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_MESSAGE: {
      return {
        ids: {
          ...state.ids,
          [action.conversationId]: state.ids[action.conversationId] ? [...state.ids[action.conversationId], ...action.normalized.result] : action.normalized.result
        },
        entities: {
          ...state.entities,
          ...action.normalized.entities.messages
        }
      };
    }
    default: {
      return state;
    }
  }
};
