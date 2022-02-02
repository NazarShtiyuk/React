import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import UsersPost from "../../components/UsersPost/UsersPost";
import {postService} from "../../services/post.service";

const PostsPage = () => {
    const {id} = useParams()
    const [post, setPost] = useState([])
    useEffect(() => {
        postService.getAll().then(item => setPost([...item]))
    }, [])
    return (
        <div>
            {post.filter(item => item.userId == id).map(post => <UsersPost key={post.id} post={post}/>)}
        </div>
    );
};
export default PostsPage;