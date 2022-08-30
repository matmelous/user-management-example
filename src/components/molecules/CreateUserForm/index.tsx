import React from "react";
import { useAppDispatch } from "../../../state/hooks";
import { actions } from "../../../state/users";
import Button from "../../atoms/Button";
import FeedBack from "../../atoms/Feedback";
import Input from "../../atoms/Input";
import Title from "../../atoms/Title";
import styles from "./LoginForm.module.scss";

const formValidate=(name:string,password:string,repeatPassword:string)=>{
    return (name && name!=="" && password && password!== ""&& repeatPassword && repeatPassword!== "" && password === repeatPassword );
}


const CreateUsersForm = ()=>{
    const dispatch = useAppDispatch();
    const [feedbackMessage,setFeedbackMessage] = React.useState("")
    const name = React.useRef<HTMLInputElement>(null)
    const password = React.useRef<HTMLInputElement>(null)
    const repeatPassword = React.useRef<HTMLInputElement>(null)

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        if(formValidate(name.current!.value, password.current!.value, repeatPassword.current!.value)){
            dispatch(actions.createUser({name:name.current!.value, password:password.current!.value}))
            setFeedbackMessage("")
        }else{
            setFeedbackMessage("Preencha todos os campos corretamente!")
        }
    }

    return (<form className={styles.wrapper} onSubmit={handleSubmit}>
        <Title>Criar um novo usuário.</Title>
        <Input type="text" label="Nome" ref={name} />
        <Input type="password" label="Senha" ref={password} />
        <Input type="password" label="Confirmar senha" ref={repeatPassword} />
        <Button type="submit" >Adicionar</Button>
        <FeedBack visible={!!feedbackMessage} >{feedbackMessage}</FeedBack>
    </form>)
}


export default React.memo(CreateUsersForm);