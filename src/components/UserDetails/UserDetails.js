import React from 'react';
import {Link} from "react-router-dom";

const UserDetails = (props) => {
    const {
        user: {
            id, name, username,
            email,
            phone,
            website
        },
    } = props
    return (
        <div>
            <ul>
                <li>id: {id}</li>
                <li>name: {name}</li>
                <li>username: {username}</li>
                <li>email: {email}</li>
                <li>phone: {phone}</li>
                <li>website: {website}</li>
            </ul>
            <hr/>
            <Link to={'posts'}>
                <button>Get posts</button>
            </Link>
        </div>
    );
};

export default UserDetails;