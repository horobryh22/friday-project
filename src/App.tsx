import React from 'react';

import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header, Links } from 'components';
import {
    ForgotPassword,
    Login,
    NotFound,
    PasswordRecovery,
    Profile,
    Registration,
} from 'pages';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    return (
        <BrowserRouter>
            <Header />
            <Container fixed>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="password_recovery" element={<PasswordRecovery />} />
                    <Route path="enter_new_password" element={<ForgotPassword />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
            <Links />
        </BrowserRouter>
    );
};

export default App;
