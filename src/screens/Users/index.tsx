import React from "react";
import Page from "../../components/atoms/Page";
import CreateUserForm from "../../components/molecules/CreateUserForm";
import UserList from "../../components/molecules/UserList";

const Users = ()=>{
    return (<Page>
        <CreateUserForm />
        <UserList />
    </Page>)
}

export default React.memo(Users);