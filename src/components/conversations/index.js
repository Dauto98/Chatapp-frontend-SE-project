import React, { useState } from "react";
import { connect } from "react-redux";

import ChannelList from "./channel/channel.js";
import UserInfo from "./userInfo/userInfo.js";

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
        <div className={style.titleBar}>

        </div>
        <div className={style.conversationContent}>
          <div className={style.messageWrapper}></div>
          <div className={style.formWrapper}>
            <div className={style.messageForm}>
              <input className={style.messageInput} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(Conversations);
