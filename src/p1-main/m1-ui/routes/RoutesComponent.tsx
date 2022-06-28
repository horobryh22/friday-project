import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {TestPage} from './pages/test-page/TestPage';
import {LoginPage} from './pages/login/LoginPage';
import {RegistrationPage} from './pages/registration/RegistrationPage';
import {ProfilePage} from './pages/profile/ProfilePage';
import {PasswordRecoveryPage} from './pages/password-recovery/PasswordRecoveryPage';
import {NotFound} from './pages/not-found/NotFound';

export const RoutesComponent = () => {
    return (
        <Routes>
            <Route path={'/'} element={<TestPage/>}/> {/*is it normal?*/}
            <Route path={'login'} element={<LoginPage/>}/>
            <Route path={'registration'} element={<RegistrationPage/>}/>
            <Route path={'profile'} element={<ProfilePage/>}/>
            <Route path={'password_recovery'} element={<PasswordRecoveryPage/>}/>
            <Route path={'enter_new_password'} element={<LoginPage/>}/>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    );
};
