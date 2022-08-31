import React from "react";
import styles from "./Button.module.scss";

interface PropsType
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = (props: PropsType) => {
  return <button className={styles.button} {...props} />;
};

export default React.memo(Button);
