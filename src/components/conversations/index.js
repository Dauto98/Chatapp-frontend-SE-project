import React, { useState } from "react";
import { connect } from "react-redux";

import style from "./index.css";

const Conversations = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.leftColumn}>
        hello
      </div>
      <div className={style.rightColumn}>
        hello
      </div>
    </div>
  );
};

export default connect()(Conversations);
