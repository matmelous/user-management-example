import React from "react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { actions } from "../../../state/users";
import { UserType } from "../../../state/users/types";
import Button from "../../atoms/Button";
import FeedBack from "../../atoms/Feedback";
import Input from "../../atoms/Input";
import Title from "../../atoms/Title";
import styles from "./CreateUser.module.scss";

const formValidate=(name:string,password:string,repeatPassword:string)=>{
    return (name && name!=="" && password && password!== ""&& repeatPassword && repeatPassword!== "" && password === repeatPassword );
}
const checkIfUserAlreadyExists=(name:string,data:UserType[])=>{
    return data.find(value => value.name ===name);
}


const CreateUsersForm = ()=>{
    const dispatch = useAppDispatch();
    const data = useAppSelector(state => state.users.data);
    const [feedbackMessage,setFeedbackMessage] = React.useState("")
    const name = React.useRef<HTMLInputElement>(null)
    const password = React.useRef<HTMLInputElement>(null)
    const repeatPassword = React.useRef<HTMLInputElement>(null)

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        const nameValue=name.current!.value;
        const passwordValue=password.current!.value;
        const repeatPasswordValue=repeatPassword.current!.value;

        if(checkIfUserAlreadyExists(nameValue,data)){
            setFeedbackMessage("Ja existe um usuario com esse nome!")
        }else if(formValidate(nameValue, passwordValue, repeatPasswordValue)){
            dispatch(actions.createUser({name:nameValue, password:passwordValue}))
            setFeedbackMessage("Usuário adicionado com sucesso!!")
        }else {
            setFeedbackMessage("Por favor preencha todos os campos corretamente!")
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