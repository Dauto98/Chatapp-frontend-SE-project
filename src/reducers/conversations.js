import * as actionTypes from "../constants/actionTypes.js";

/**
 * pagination: {
 *    "searchPhase" : {
 *        isFull: false,
 *        elements: []
 *    }
 * },
 * entities: {
 *   id: {
 *     id: '',
 *     lastReplyTime: '',
 *     user: id,
 *     snippet: ""
 *   }
 * },
 * query: '',
 * isFetching: false,
 * currentConversation: ""
 */

const initState = {
  pagination: {},
  entities: {},
  query: "",
  isFetching: false,
  currentConversation: ""
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCH_CONVERSATION: {
      return {
        ...state,
        isFetching: true
      };
    }
    case actionTypes.END_FETCH_CONVERSATION: {
      return {
        ...state,
        isFetching: false
      };
    }
    case actionTypes.RECEIVE_CONVERSATION: {
      return {
        pagination: {
          ...state.pagination,
          [action.filter.query]: {
            isFull: !action.normalized.result.length,
            elements: state.pagination[action.filter.query] ? [...state.pagination[action.filter.query].elements, action.normalized.result] : action.normalized.result
          }
        },
        entities: {
          ...state.entities,
          ...action.normalized.entities.conversations
        },
        query: state.query,
        isFetching: false,
        currentConversation: state.currentConversation
      };
    }
    case actionTypes.CHANGE_CONVERSATION: {
      return {
        ...state,
        currentConversation: action.id
      };
    }
    default: {
      return state;
    }
  }
};
