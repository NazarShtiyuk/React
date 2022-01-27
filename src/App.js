import React, {useState} from 'react';

import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Posts from "./components/Posts";
import css from "./App.module.css";
import {postService} from "./services/post.service";

const App = () => {

    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])

    const getUser = (user) => {
        setUser(user)
        setPosts([]);
    }
    const getUserId = (id) => {
        postService.getById(id).then(posts => setPosts([...posts]))
    }
    return (
        <div>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            <hr/>
            {!!posts.length && <Posts posts={posts}/>}
        </div>
    );
};

export default App;