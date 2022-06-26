import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {TestPage} from './pages/TestPage';
import {LoginPage} from './pages/LoginPage';
import {RegistrationPage} from './pages/RegistrationPage';
import {ProfilePage} from './pages/ProfilePage';
import {PasswordRecoveryPage} from './pages/PasswordRecoveryPage';
import {ErrorPage} from './pages/ErrorPage';

export const RoutesComponent = () => {
    return (
        <Routes>
            <Route path={'test_page'} element={<TestPage/>}/>
            <Route path={'login'} element={<LoginPage/>}/>
            <Route path={'registration'} element={<RegistrationPage/>}/>
            <Route path={'profile'} element={<ProfilePage/>}/>
            <Route path={'password_recovery'} element={<PasswordRecoveryPage/>}/>
            <Route path={'page_not_found'} element={<ErrorPage/>}/>
            <Route path={'enter_new_password'} element={<LoginPage/>}/>
        </Routes>
    );
};
