import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getPosts} from "../store/posts.slice";
import Post from "../components/Post";

const PostsPage = () => {

    const {posts, status, error} = useSelector(state => state['postsReducer'])
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPosts());
    },[])

    return (
        <div>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsPage;