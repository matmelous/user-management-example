import React from 'react';
import Home from './screens/Home';
import Users from './screens/Users';
import { useAppSelector } from './state/hooks';

function App() {
  const users=useAppSelector((state) => state.users)
  console.log(users)
  return (users.currentUser 
    ? <Users /> 
    : <Home />
  );
}

export default App;
