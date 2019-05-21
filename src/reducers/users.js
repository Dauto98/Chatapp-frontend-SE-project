import * as actionTypes from "../constants/actionTypes.js";

/**
 * {
 *   id: {
 *     id: '',
 *     avatar: '',
 *     username: [<userId>]
 *     user: id
 *   }
 * }
 */

const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_CONVERSATION: {
      return {
        ...state,
        ...action.normalized.entities.users
      };
    }
    default: {
      return state;
    }
  }
};
