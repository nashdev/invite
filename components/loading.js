import React from "react";
import css from "./loading.css";

const Loading = () => {
  return (
    <div className={css.spinner}>
      <div className={css.bounce1} />
      <div className={css.bounce2} />
      <div className={css.bounce3} />
    </div>
  );
};

export default Loading;
