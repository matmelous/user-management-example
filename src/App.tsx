import React from 'react';
import Home from './screens/Home';
import { useAppSelector } from './state/hooks';

function App() {
  const users=useAppSelector((state) => state.users)
  console.log(users)
  return (
      <Home />
  );
}

export default App;
