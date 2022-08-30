import React from "react";
import Button from "../../atoms/Button";
import FeedBack from "../../atoms/Feedback";
import Input from "../../atoms/Input";
import styles from "./LoginForm.module.scss";

const CreateUsersForm = ()=>{
    const [feedbackMessage,setFeedbackMessage] = React.useState("")
    const name = React.useRef<HTMLInputElement>(null)
    const password = React.useRef<HTMLInputElement>(null)
    const repeatPassword = React.useRef<HTMLInputElement>(null)

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
       
    }

    return (<form className={styles.wrapper} onSubmit={handleSubmit}>
        <p>Criar um novo usuário.</p>
        <Input type="text" label="Nome" ref={name} />
        <Input type="password" label="Senha" ref={password} />
        <Input type="password" label="Confirmar senha" ref={repeatPassword} />
        <Button type="submit" >Cadastrar usuário</Button>
        <FeedBack visible={!!feedbackMessage} >{feedbackMessage}</FeedBack>
    </form>)
}


export default React.memo(CreateUsersForm);