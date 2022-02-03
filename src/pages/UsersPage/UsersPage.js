import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";


import User from "../../components/User/User";
import css from './UsersPage.css'
import {usersService} from "../../services/user.service";

const UsersPage = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll().then(item => setUsers([...item]))
    }, [])

    return (
        <div className={css.allUsers}>
            <div className={css.users}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export default UsersPage;