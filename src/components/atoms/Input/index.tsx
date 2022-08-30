import React from "react";

interface PropsType extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{

}

const Input = React.forwardRef(( props:PropsType,ref:React.LegacyRef<HTMLInputElement> | undefined)=>{

    return <input ref={ref} {...props} />;

})

export default React.memo(Input);