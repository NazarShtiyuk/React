import React from 'react';

const Comment = ({comment: {id, postId, name, email, body}}) => {
    return (
        <div>
            <div>ID: {id}</div>
            <div>PostID: {postId}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <hr/>
        </div>
    );
};

export default Comment;