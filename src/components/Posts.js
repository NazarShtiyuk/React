import React, {useEffect, useState} from 'react';

const Posts = ({styleClass}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(value => value.json())
            .then(value => setPosts(value))

    }, [])

    return (
        <div className={styleClass}>
            <ol>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ol>
        </div>
    );
};

export default Posts;