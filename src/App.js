import React, { useState } from 'react';
import AddUser from './Components/AddUser/AddUser';
import styles from './App.module.css'
import UserList from './Components/UsersList/UsersList';

function App() {
  const [usersData, setUsersData] = useState([
    {
      id: 1,
      username: 'Pedro Lima',
      age: 23
    },
    {
      id: 2,
      username: 'George Fred',
      age: 26
    }
  ]);

  const addUserHanldler = (data) => {
    data.age = +data.age;
    setUsersData((prev) => {
      return [...prev, data]
    })
  }

  return (
    <div className={styles['container-background']}>
      <div className={styles['container-user']}>
        <AddUser onAddUser={addUserHanldler}/>
      </div>
      <UserList usersArray={usersData}/>
    </div>
  );
}

export default App;
