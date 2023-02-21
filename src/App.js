import React from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
  return (
    <>
      <AddUser />
      <UsersList users={[]}/>
    </>
  );
}

export default App;
