import React from 'react';

import css from "./Layout.module.css"
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div className={css.menu}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
            </div>
            {<Outlet/>}
        </div>
    );
};

export default Layout;