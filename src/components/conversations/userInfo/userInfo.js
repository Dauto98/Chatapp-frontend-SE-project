import React from "react";

import userDefaultImg from "../../../assets/images/icon-user-default.png";
import iconCog from "../../../assets/svg/cog.svg";

import style from "./userInfo.css";

const UserInfo = () => {
  return (
    <div className={style.userInfoContainer}>
      <div className={style.userAvatar}>
        <img src={userDefaultImg.src} srcSet={userDefaultImg.srcSet} />
      </div>
      <div className={style.username}>
        Gaben
      </div>
      <div className={style.iconList}>
        <button type="button" className={style.iconButton}>
          <svg><use xlinkHref={`#${iconCog.id}`}></use></svg>
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
