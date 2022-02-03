import React from 'react';
import {Link} from "react-router-dom";

const User = (props) => {
    const {user: {id, name, username}} = props
    return (
        <div>
            <ul>
                <li>id: {id}</li>
                <li>name: {name}</li>
                <Link to={`${id.toString()}/albums`}>
                    <button>All albums</button>
                </Link>
            </ul>
        </div>
    );
};

export default User;