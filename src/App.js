import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';

function App() {

  const [users, setUsers] = useState([]);

  const [userSelected, setUserSelected] = useState(null)


  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }, []);

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
  }

  const selectUser = user => setUserSelected(user);

  const deselectUser = () => setUserSelected(null);

  const removeUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  }

  console.log(users);

  return (

    <div className="app">
      <UsersForm
        getUsers={getUsers}
        userSelected={userSelected}
        deselectUser={deselectUser}
      />
      <UsersList
        users={users}
        selectUser={selectUser}
        removeUser={removeUser}
      />
    </div>
  );
}

export default App;
