import React from "react";
import LoginForm from "../../components/molecules/LoginForm";
import styles from  "./Home.module.scss";

const Home = ()=>{
    return (<div className={styles.home}>
        <p>Please insert your credentials</p>
        <LoginForm />
    </div>)
}

export default React.memo(Home);