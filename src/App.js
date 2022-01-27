import React, {useEffect, useState} from 'react';
import './App.css'
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

const App = () => {

    return (
        <div className={'App'}>
            <Users styleClass={'users'}/>
            <Posts styleClass={'posts'}/>
            <Comments styleClass={'comments'}/>
        </div>
    );
};

export default App;