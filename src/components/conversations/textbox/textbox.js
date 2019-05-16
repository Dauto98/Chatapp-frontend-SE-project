import React from "react";

import style from "./textbox.css";

const Textbox = () => {
  return (
    <div className={style.formWrapper}>
      <div className={style.messageForm}>
        <input className={style.messageInput} />
      </div>
    </div>
  );
};

export default Textbox;
