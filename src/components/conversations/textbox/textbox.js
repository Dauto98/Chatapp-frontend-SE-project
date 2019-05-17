import React from "react";

import iconAttachment from "../../../assets/svg/attachment.svg";

import style from "./textbox.css";

const Textbox = () => {
  return (
    <div className={style.formWrapper}>
      <div className={style.messageForm}>
        <input className={style.messageInput} />
        <svg className={`${style.textboxIcon} ${style.iconClickable}`}><use xlinkHref={`#${iconAttachment.id}`}></use></svg>
      </div>
    </div>
  );
};

export default Textbox;
