import React from 'react';
import css from "./user.module.css";

const User = ({user, getUser}) => {

    const {id, name} = user;

    return (
        <div className={css.wrap}>
            <div>{id} - {name}</div>
            <button onClick={() => getUser(user)}>Get details</button>
        </div>
    );
};

export default User;