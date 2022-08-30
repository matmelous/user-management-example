import React from "react";
import styles from  "./Page.module.scss";

interface PropsType {
    children:React.ReactNode
}

const Home = ({children}:PropsType)=>{
    return (<div className={styles.wrapper}>
        {children}
    </div>)
}

export default React.memo(Home);