import React from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import styles from "./LoginForm.module.scss";

const LoginForm = ()=>{
    
    return (<form className={styles.wrapper}>
        <Input type="text"/>
        <Input type="password" />
        <Button type="submit" >Submit</Button>
    </form>)
}


export default LoginForm;