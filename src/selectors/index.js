import { createSelector } from "reselect";

export const getConversations = createSelector(
  state => state.conversations,
  state => state.users,
  (conversations, users) => {
    if (conversations.pagination[conversations.query]) {
      return conversations.pagination[conversations.query].elements.map(id => conversations.entities[id]).map(conversation => ({
        ...conversation,
        user: conversation.user.map(userId => users[userId])
      }));
    }
    return [];
  }
);
