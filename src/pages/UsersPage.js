import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getUsers} from "../store/users.slice";
import User from "../components/User";

const UsersPage = () => {
    
    const {users, status, error} = useSelector(state => state['usersReducer'])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    }, [])


    return (
        <div>
            {error && <h2>{error}</h2>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersPage;