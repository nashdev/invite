import React from "react";
import css from "./section.css";

const Section = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Section;
