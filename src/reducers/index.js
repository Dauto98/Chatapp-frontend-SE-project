import { combineReducers } from "redux";

import auth from "./auth.js";
import conversations from "./conversations.js";
import users from "./users.js";

export default combineReducers({
  auth,
  conversations,
  users
});
