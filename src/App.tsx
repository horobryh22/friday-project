import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from 'components/header/Header';
import { ForgotPassword } from 'pages/forgotPassword/ForgotPassword';
import { Login } from 'pages/login/Login';
import { NotFound } from 'pages/notFound/NotFound';
import { PasswordRecovery } from 'pages/passwordRecovery/PasswordRecovery';
import { Profile } from 'pages/profile/Profile';
import { Registration } from 'pages/registration/Registration';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="password_recovery" element={<PasswordRecovery />} />
                    <Route path="enter_new_password" element={<ForgotPassword />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
