import React from "react";

import iconUserDefault from "../../../assets/images/icon-user-default.png";

import style from "./channel.css";

const ChannelList = () => {
  return (
    <div className={style.channelContainer}>
      <div className={style.channel}>
        <div className={style.channelAvatar}>
          <img src={iconUserDefault.src} srcSet={iconUserDefault.srcSet} />
        </div>
        <div className={style.channelInfo}>
          <div className={style.channelName}>
            Gaben
          </div>
          <div className={style.channelSnippet}>
            1 thận ăn 3 thận
          </div>
        </div>
        <div className={style.channelTime}>16:12</div>
      </div>
      <div className={style.channel}>
        <div className={style.channelAvatar}>
          <img src={iconUserDefault.src} srcSet={iconUserDefault.srcSet} />
        </div>
        <div className={style.channelInfo}>
          <div className={style.channelName}>
            Gaben
          </div>
          <div className={style.channelSnippet}>
            1 thận ăn 3 thận
          </div>
        </div>
        <div className={style.channelTime}>16:12</div>
      </div>
      <div className={style.channel}>
        <div className={style.channelAvatar}>
          <img src={iconUserDefault.src} srcSet={iconUserDefault.srcSet} />
        </div>
        <div className={style.channelInfo}>
          <div className={style.channelName}>
            Gaben
          </div>
          <div className={style.channelSnippet}>
            1 thận ăn 3 thận
          </div>
        </div>
        <div className={style.channelTime}>16:12</div>
      </div>
    </div>
  );
};

export default ChannelList;
