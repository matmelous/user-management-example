import React from "react";
import { useDispatch } from "react-redux";
import useAuthenticate from "../../../hooks/useAuthenticate";
import { actions } from "../../../state/users";
import Button from "../../atoms/Button";
import FeedBack from "../../atoms/Feedback";
import Input from "../../atoms/Input";
import styles from "./LoginForm.module.scss";

const formValidate=(name:string,password:string)=>{
    return (name && name!=="" && password && password!== "");
}

const LoginForm = ()=>{
    const dispatch = useDispatch();
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
            }else{
                setFeedbackMessage('Usuario não encontrado!')
            }

        }else{
            setFeedbackMessage('Por favor preencha todos os campos!')
        }
    }

    return (<form className={styles.wrapper} onSubmit={handleSubmit}>
        <p>Preencha suas credenciais para prosseguir!</p>
        <Input type="text" label="Nome" ref={name} />
        <Input type="password" label="Senha" ref={password} />
        <Button type="submit" >Cadastrar Usuário</Button>
        <FeedBack visible={!!feedbackMessage} >{feedbackMessage}</FeedBack>
    </form>)
}


export default React.memo(LoginForm);