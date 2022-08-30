import React from "react";
import { UserType } from "../../../state/users/types";
import styles from "./User.module.scss";

interface PropTypes {
    user:UserType
}

const User = ({user}:PropTypes)=>{

    return (<div className={styles.wrapper}>{user.name}</div>)
}

export default React.memo(User)