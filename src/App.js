import React from 'react';
import {Route, Routes} from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu";
import CarsPage from "./pages/CarsPage";
import PostsPage from "./pages/PostsPage";
import UsersPage from "./pages/UsersPage";
import CommentsPage from "./pages/CommentsPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HeaderMenu/>}>
                    <Route path={'cars'} element={<CarsPage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;