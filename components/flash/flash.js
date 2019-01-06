import React from "react";
import cn from "classnames";

import s from "./flash.css";

const STATUS_MAP = {
  success: "is-success",
  warning: "is-warning",
  info: "is-info",
  danger: "is-danger",
  error: "is-danger"
};

const Flash = ({ flash }) => {
  if (!flash || !flash.message) {
    return null;
  }

  return (
    <div
      className={cn({
        notification: true,
        [STATUS_MAP[flash.status]]: true // todo: map this to flash.status
      })}
    >
      <div className="container">
        <span className={s.title}>{flash.title}</span>
        <span className={s.dash}>—</span>
        <span className={s.subtitle}>{flash.message}</span>
        {flash.link && (
          <a href={flash.link} className={s.action}>
            {flash.linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Flash;
