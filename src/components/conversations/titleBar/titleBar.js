import React from "react";
import { connect } from "react-redux";

import { getCurrentConversation } from "../../../selectors/index.js";

import iconA from "../../../assets/svg/@.svg";
import iconPhoneCall from "../../../assets/svg/phoneCall.svg";
import iconCamera from "../../../assets/svg/camera.svg";

import style from "./titleBar.css";

const TitleBar = (props) => {
  return (
    <div className={style.titleBar}>
      <div className={style.calleeInfo}>
        <svg className={style.titleIcon}><use xlinkHref={`#${iconA.id}`}></use></svg>
        <h3 className={style.title}>{props.conversation.user ? props.conversation.user.map(user => user.username).join(", ") : ""}</h3>
      </div>
      <div className={style.toolbar}>
        <svg className={`${style.titleIcon} ${style.iconClickable}`}><use xlinkHref={`#${iconPhoneCall.id}`}></use></svg>
        <svg className={`${style.titleIcon} ${style.iconClickable}`}><use xlinkHref={`#${iconCamera.id}`}></use></svg>
        <input className={style.searchInput} type="text" placeholder="Search in conversation" />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    conversation: getCurrentConversation(state)
  };
};

export default connect(mapStateToProps, null)(TitleBar);
