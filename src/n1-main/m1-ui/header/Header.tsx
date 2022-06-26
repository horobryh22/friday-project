import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css'

function Header() {

    const activeStyle = {
        color: 'rgba(255, 255, 255, 0.94)'
    }

    return (
        <nav className={classes.nav}>
            <header className={classes.header}>
                <NavLink
                    to={'/login'}
                    style={({isActive}) => isActive ? activeStyle : {}}
                >Login</NavLink>
                <NavLink
                    to={'/registration'}
                    style={({isActive}) => isActive ? activeStyle : {}}
                >Registration</NavLink>
                <NavLink
                    to={'/profile'}
                    style={({isActive}) => isActive ? activeStyle : {}}
                >Profile</NavLink>
                <NavLink
                    to={'/password_recovery'}
                    style={({isActive}) => isActive ? activeStyle : {}}
                >Password recovery</NavLink>
                <NavLink
                    to={'/page_not_found'}
                    style={({isActive}) => isActive ? activeStyle : {}}
                >Page not found</NavLink>
                <NavLink
                    to={'/enter_new_password'}
                    style={({isActive}) => isActive ? activeStyle : {}}
                >Enter new password</NavLink>
                <NavLink
                    to={'/test_page'}
                    style={({isActive}) => isActive ? activeStyle : {}}
                >Test page</NavLink>
            </header>
        </nav>
    )
}

export default Header;
