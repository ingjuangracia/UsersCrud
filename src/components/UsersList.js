import React from 'react';

const UsersList = ({users, selectUser, removeUser}) => {
    return (
        <div className="userListContainer">
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>
                            <h3>{user.first_name} {user.last_name}</h3>
                            <h3>{user.email}</h3>
                            <h3>{user.birthday}</h3>
                            <button className="btnEdit" onClick={() => selectUser(user) }>Edit</button>
                            <button className="btnDelete" onClick={() => removeUser(user.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersList;