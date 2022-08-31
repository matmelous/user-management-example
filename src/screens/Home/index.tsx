import React from "react";
import Page from "../../components/atoms/Page";
import LoginForm from "../../components/molecules/LoginForm";

const Home = () => {
  return (
    <Page>
      <LoginForm />
    </Page>
  );
};

export default React.memo(Home);
