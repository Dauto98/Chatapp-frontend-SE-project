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

export const getCurrentConversation = createSelector(
  state => state.conversations.entities,
  state => state.conversations.currentConversation,
  state => state.users,
  (conversationEntities, currentConversationId, users) => {
    if (conversationEntities[currentConversationId]) {
      return {
        ...conversationEntities[currentConversationId],
        user: conversationEntities[currentConversationId].user.map(userId => users[userId])
      };
    }
    return {};
  }
);

export const getMessage = createSelector(
  state => state.messages.ids[state.conversations.currentConversation],
  state => state.messages.entities,
  (ids, mesEntities) => {
    if (ids) {
      const messList = ids.map(id => mesEntities[id]).sort((a, b) => a.sendTime - b.sendTime);
      if (messList.length) {
        const result = [[messList[0]]];
        let j = 0;
        for (let i = 1; i < messList.length; i++) {
          if (messList[i].sendTime - result[j][result[j].length - 1].sendTime > 3600000) {
            j++;
            result[j] = [messList[i]];
          } else {
            result[j].push(messList[i]);
          }
        }
        console.log(result);
        return result;
      }
    }
    return [];
  }
);
