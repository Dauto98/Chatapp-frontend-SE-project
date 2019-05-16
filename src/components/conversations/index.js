import React, { useState } from "react";
import { connect } from "react-redux";

import ChannelList from "./channel/channel.js";
import UserInfo from "./userInfo/userInfo.js";
import TitleBar from "./titleBar/titleBar.js";
import MessageList from "./messageList/messageList.js";
import Textbox from "./textbox/textbox.js";

import style from "./index.css";

const Conversations = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.leftColumn}>
        <div className={style.conversationListContainer}>
          <div className={style.searchBar}>
            <div className={style.innerContainer}>
              <input className={style.searchInput} type="text" placeholder="Find or start a conversation" />
            </div>
          </div>
          <ChannelList />
        </div>
        <UserInfo />
      </div>
      <div className={style.rightColumn}>
        <TitleBar />
        <div className={style.conversationContent}>
          <MessageList />
          <Textbox />
        </div>
      </div>
    </div>
  );
};

export default connect()(Conversations);
