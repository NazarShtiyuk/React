import React from 'react';
import {NavLink} from "react-router-dom";


const User = (props) => {
    const {user: {id, name}} = props
    return (
        <>
            <div>
                <NavLink to={id.toString()}>{id}) {name}</NavLink>
            </div>
        </>
    );
};

export default User;