import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../store/comments.slice";
import Comment from "../components/Comment";

const CommentsPage = () => {

    const {comments, status, error} = useSelector(state => state['commentsReducer'])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getComments())
    },[])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsPage;