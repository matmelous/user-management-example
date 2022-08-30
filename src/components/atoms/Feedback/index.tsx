import React from "react";

import styles from './FeedBack.module.scss'

interface PropsType{
    children:React.ReactElement | string,
    visible?:boolean,
}
const FeedBack = ({children,visible}:PropsType)=>{
    if(!visible){
        return null
    }
    return (<p className={styles.wrapper}>
        {children}
    </p>)
}

export default React.memo(FeedBack)