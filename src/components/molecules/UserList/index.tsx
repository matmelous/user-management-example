import React from "react";
import { useAppSelector } from "../../../state/hooks";
import styles from "./UserList.module.scss";
import User from "../../atoms/User";
import Title from "../../atoms/Title";

const UserList = () => {
  const users = useAppSelector((state) => state.users.data);
  const currentUsers = [...users];
  return (
    <div className={styles.wrapper}>
      <Title>Usuarios cadastrados atualmente</Title>
      {currentUsers.reverse().map((user, index) => (
        <User key={user.name + index} user={user} />
      ))}
    </div>
  );
};

export default React.memo(UserList);
