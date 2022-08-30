import React from "react";

interface PropsType extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{

}

const Button = ( props:PropsType)=>{

    return <button {...props} />;

}

export default React.memo(Button)