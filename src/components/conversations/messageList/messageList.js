import React from "react";

import userDefaultImg from "../../../assets/images/icon-user-default.png";

import style from "./messageList.css";

const MessageList = () => {
  return (
    <div className={style.messageWrapper}>
      <div className={style.messageGroup}>
        <div className={style.groupTime}>
          <div className={style.groupTimeLine}></div>
          <div className={style.groupTimeText}>Tue, Oct 20, 2019</div>
          <div className={style.groupTimeLine}></div>
        </div>
        <div className={style.partnerMessage}>
          <div className={style.partnerAva}>
            <img src={userDefaultImg.src} srcSet={userDefaultImg.srcSet} />
          </div>
          <div className={style.partnerMessageBlock}>
            <span className={style.messageLine}>Em có muốn làm giàu ko?</span>
            <span className={style.messageLine}>Có ước mơ đổi đời ko?</span>
          </div>
        </div>
        <div className={style.userMessage}>
          <div className={style.userMessageBlock}>
            <span className={style.messageLine}>Vừa làm kinh tế, vừa thỏa đam mê</span>
            <span className={style.messageLine}>Thậm chí hàng tháng còn có 1 khoản gửi về cho gia đình</span>
          </div>
        </div>
        <div className={style.readStatus}>
          Seen at 17:01
        </div>
      </div>
    </div>
  );
};

export default MessageList;
