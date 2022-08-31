import React from "react";
import styles from "./Title.module.scss";

interface PropTypes {
  children: React.ReactNode;
}

const Title = ({ children }: PropTypes) => {
  return <h1 className={styles.wrapper}>{children}</h1>;
};

export default React.memo(Title);
