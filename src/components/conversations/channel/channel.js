import React, { useEffect } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import PerfectScrollbar from "react-perfect-scrollbar";

import { getConversations } from "../../../selectors/index.js";

import { fetchConversation, changeConversation } from "../../../actions/conversationActions.js";

import { formatDate } from "../../../util/datetime.js";

import userDefaultImg from "../../../assets/images/icon-user-default.png";

import style from "./channel.css";

const ChannelList = (props) => {
  useEffect(() => {
    props.fetchConversation();
  }, []);

  const loadMore = () => props.fetchConversation({ limit: 10, offset: props.conversations.length, query: props.query });

  return (
    <div className={style.channelContainer}>
      <PerfectScrollbar>
        <InfiniteScroll loadMore={loadMore} hasMore={props.isFull} useWindow={false} loader={<div className={style.loader} key={0}>Loading ...</div>}>
          {props.conversations.map(conversation => (
            <div key={conversation.id} className={style.channel} onClick={() => props.changeConversation(conversation.id)}>
              <div className={style.channelAvatar}>
                {conversation.user.avatar ? (
                  <img src={conversation.user.avatar} alt="user avatar" />
                ) : (
                  <img src={userDefaultImg.src} srcSet={userDefaultImg.srcSet} alt="user avatar" />
                )}
              </div>
              <div className={style.channelInfo}>
                <div className={style.channelName}>
                  {conversation.user.map(user => user.username).join(", ")}
                </div>
                <div className={style.channelSnippet}>
                  {conversation.snippet.length > 30 ? `${conversation.snippet.slice(0, 28)}...` : conversation.snippet}
                </div>
              </div>
              <div className={style.channelTime}>{formatDate(conversation.lastReplyTime)}</div>
            </div>
          ))}
        </InfiniteScroll>
      </PerfectScrollbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    conversations: getConversations(state),
    query: state.conversations.query,
    isFull: state.conversations.pagination[state.conversations.query] ? state.conversations.pagination[state.conversations.query].isFull : false
  };
};

export default connect(mapStateToProps, { fetchConversation, changeConversation })(ChannelList);
