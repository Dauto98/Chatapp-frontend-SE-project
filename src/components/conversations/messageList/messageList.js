import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import PerfectScrollbar from "react-perfect-scrollbar";

import { getMessage } from "../../../selectors/index.js";

import { fetchMessage } from "../../../actions/messageActions.js";

import { formatDate } from "../../../util/datetime.js";

import userDefaultImg from "../../../assets/images/icon-user-default.png";

import style from "./messageList.css";

const MessageList = (props) => {
  useEffect(() => {
    props.fetchMessage({ conversationId: props.currentConversation });
  }, [props.currentConversation]);

  const messageGroup = useMemo(() => {
    return props.messageGroup.map(group => {
      const result = [[group[0]]];
      let flag = props.user.id === group[0].sender;
      for (let i = 1; i < group.length; i++) {
        if (flag === (group[i].sender === props.user.id)) {
          result[result.length - 1].push(group[i]);
        } else {
          result[result.length] = [group[i]];
        }
        flag = group[i].sender === props.user.id;
      }
      return result;
    });
  }, [props.messageGroup, props.user.id]);

  return (
    <PerfectScrollbar className={style.messageWrapper}>
      {messageGroup.map(group => (
        <div key={group[0][0].id} className={style.messageGroup}>
          <div className={style.groupTime}>
            <div className={style.groupTimeText}>{formatDate(group[0][0].sendTime)}</div>
          </div>
          {group.map(senderGroup => (senderGroup[0].sender === props.user.id ? (
            <div key={senderGroup[0].id} className={style.userMessage}>
              <div className={style.userMessageBlock}>
                {senderGroup.map(message => <span key={message.id} className={style.messageLine}>{message.content}</span>)}
              </div>
            </div>
          ) : (
            <div key={senderGroup[0].id} className={style.partnerMessage}>
              <div className={style.partnerAva}>
                <img src={userDefaultImg.src} srcSet={userDefaultImg.srcSet} />
              </div>
              <div className={style.partnerMessageBlock}>
                {senderGroup.map(message => <span key={message.id} className={style.messageLine}>{message.content}</span>)}
              </div>
            </div>
          )))}
          {/* <div className={style.readStatus}>
            Seen at 17:01
          </div> */}
        </div>
      ))}
    </PerfectScrollbar>
  );
};

const mapStateToProps = state => {
  return {
    currentConversation: state.conversations.currentConversation,
    messageGroup: getMessage(state),
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { fetchMessage })(MessageList);
