import React from "react";

import styles from "./Input.module.scss";

interface PropsType extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    label: string,
}

const Input = React.forwardRef(( {label, ...props}:PropsType,ref:React.LegacyRef<HTMLInputElement> | undefined)=>{

    return <div className={styles.wrapper}>
        <p className={styles.label}>{label}</p>
        <input ref={ref} {...props} />
        </div>;

})

export default React.memo(Input);