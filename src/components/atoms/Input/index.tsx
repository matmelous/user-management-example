import React from "react";

interface PropsType extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{

}

const Input = ( props:PropsType)=>{

    return <input {...props} />;

}

export default Input;