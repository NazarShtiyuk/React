import React, {useEffect, useState} from 'react';

const Comments = ({styleClass}) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/')
            .then(value => value.json())
            .then(value => setComments(value))

    }, [])

    return (
        <div className={styleClass}>
            <ol>
                {comments.map(comments => <li key={comments.id}>{comments.body}</li>)}
            </ol>
        </div>
    );
};

export default Comments;