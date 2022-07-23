import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { LoginPage } from './pages/login/LoginPage';
import { NotFound } from './pages/not-found/NotFound';
import { PasswordRecoveryPage } from './pages/password-recovery/PasswordRecoveryPage';
import { ProfilePage } from './pages/profile/ProfilePage';
import { RegistrationPage } from './pages/registration/RegistrationPage';
import { TestPage } from './pages/test-page/TestPage';

import { ReturnComponentType } from 'types';

export const RoutesComponent = (): ReturnComponentType => {
    return (
        <Routes>
            <Route path="/" element={<TestPage />} /> {/* is it normal? */}
            <Route path="login" element={<LoginPage />} />
            <Route path="signUp" element={<RegistrationPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="password_recovery" element={<PasswordRecoveryPage />} />
            <Route path="enter_new_password" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
