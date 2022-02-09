import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './HeaderMenu.module.css'

const HeaderMenu = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'cars'}>Cars</NavLink>
                <NavLink to={'users'}>Users</NavLink>
                <NavLink to={'posts'}>Posts</NavLink>
                <NavLink to={'comments'}>Comments</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default HeaderMenu;