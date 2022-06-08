import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const UsersForm = ({ getUsers, userSelected, deselectUser }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");

    useEffect(() => {
        if (userSelected !== null) {
            setFirstName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday);
        } else {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setBirthday("");
        }
    }, [userSelected])

    const submit = e => {
        e.preventDefault();

        const user = {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            birthday: birthday
        }
        if (userSelected !== null) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                .then(() => {
                    getUsers();
                    deselectUser();
                });
        } else {

            axios.post('https://users-crud1.herokuapp.com/users/', user)
                .then(() => getUsers())
                .catch(error => console.log(error.response));
        }
    }

    return (
        <form className="usersForm" onSubmit={submit}>
            <div>
                <label htmlFor="firstName">
                    Name
                </label>
                <input
                    type="text"
                    id="firstName"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                />
            </div>
            <div>
                <label htmlFor="lastName">
                    Last Name
                </label>
                <input
                    type="text"
                    id="lastName"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                />
            </div>
            <div>
                <label htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div>
                <label htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <div>
                <label htmlFor="birthday">
                    Birthday
                </label>
                <input
                    type="date"
                    id="birthday"
                    onChange={e => setBirthday(e.target.value)}
                    value={birthday}
                />
            </div>
            <button className="btnForm" type="submit">Submit</button>
        </form>
    );
};

export default UsersForm;