import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from 'components/header/Header.module.css';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
    const activeStyle = {
        color: 'rgba(255, 255, 255, 0.94)',
    };

    return (
        <nav className={classes.nav}>
            <header className={classes.header}>
                <NavLink
                    to="/login"
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                >
                    Login
                </NavLink>
                <NavLink
                    to="/registration"
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                >
                    Registration
                </NavLink>
                <NavLink
                    to="/profile"
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                >
                    Profile
                </NavLink>
                <NavLink
                    to="/password_recovery"
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                >
                    Password recovery
                </NavLink>
                <NavLink
                    to="/not_found"
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                >
                    Not found
                </NavLink>
                <NavLink
                    to="/forgot_password"
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                >
                    Forgot password
                </NavLink>
                <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : {})}>
                    Test page
                </NavLink>
            </header>
        </nav>
    );
};
