import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import './Menu.css'

const Menu = () => {
    return (
        <>
            <div className={'menu'}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
            </div>
            <Outlet/>
        </>
    );
};

export default Menu;