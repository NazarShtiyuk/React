import React from 'react';

const UsersPost = (props) => {
    const {post: {userId, id, title, body}} = props
    return (
        <div className={'posts'}>
            <ul>
                <li>userId: {userId}</li>
                <li>id: {id}</li>
                <li>title: {title}</li>
                <li>body: {body}</li>
                <hr/>
            </ul>
        </div>
    );
};

export default UsersPost;