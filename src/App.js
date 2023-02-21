import React,{useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';



function App() {

  const [userList, setUserList] = useState([]);

  const addUserHandler = (userName, UserAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: userName, age: UserAge, id:Math.random().toString() }]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList} />
    </div>
  );
}

export default App;
