import React from "react";
import useAuthenticate from "../../../hooks/useAuthenticate";
import { useAppDispatch } from "../../../state/hooks";
import { actions } from "../../../state/users";
import Button from "../../atoms/Button";
import FeedBack from "../../atoms/Feedback";
import Input from "../../atoms/Input";
import Title from "../../atoms/Title";
import styles from "./LoginForm.module.scss";

const formValidate=(name:string,password:string)=>{
    return (name && name!=="" && password && password!== "");
}

const LoginForm = ()=>{
    const dispatch = useAppDispatch();
    const {authenticate} = useAuthenticate();
    const [feedbackMessage,setFeedbackMessage] = React.useState("")
    const name = React.useRef<HTMLInputElement>(null)
    const password = React.useRef<HTMLInputElement>(null)
   
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        if(formValidate(name.current!.value, password.current!.value)){
            const user = authenticate(name.current!.value,password.current!.value)
            if(!!user){
                setFeedbackMessage(`Bem vindo ${user.name}!!`)
                dispatch(actions.authenticate(user.id))
                setFeedbackMessage("")
            }else{
                setFeedbackMessage("Usuario não encontrado!")
            }

        }else{
            setFeedbackMessage("Por favor preencha todos os campos!")
        }
    }

    return (<form className={styles.wrapper} onSubmit={handleSubmit}>
        <Title>Preencha suas credenciais para prosseguir!</Title>
        <Input type="text" label="Nome" ref={name} />
        <Input type="password" label="Senha" ref={password} />
        <Button type="submit" >Cadastrar Usuário</Button>
        <FeedBack visible={!!feedbackMessage} >{feedbackMessage}</FeedBack>
    </form>)
}


export default React.memo(LoginForm);