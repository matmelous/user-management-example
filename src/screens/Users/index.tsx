import React from "react";
import Page from "../../components/atoms/Page";
import CreateUserForm from "../../components/molecules/CreateUserForm";

const Users = ()=>{
    return (<Page>
        <CreateUserForm />
    </Page>)
}

export default React.memo(Users);