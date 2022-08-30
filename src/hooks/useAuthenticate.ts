import { useAppSelector } from "../state/hooks";

const useAuthenticate = ()=>{
    const users=useAppSelector((state) => state.users)
    const authenticate = (name:string,password:string)=>{
        return users.data.find(user => user.name===name && user.password===password)
    }
    return {authenticate}
}

export default useAuthenticate;