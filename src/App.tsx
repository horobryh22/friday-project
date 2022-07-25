import React from 'react';

import { Container, Grid } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ErrorSnackbar, Header, Links } from 'components';
import {
    ForgotPassword,
    NotFound,
    CreateNewPassword,
    Profile,
    Registration,
    SignIn,
} from 'pages';
import { CheckEmail } from 'pages/checkEmail/CheckEmail';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    return (
        <BrowserRouter>
            <Header />
            <Container fixed>
                <Grid container justifyContent="center">
                    <Routes>
                        <Route path="/" element={<SignIn />} />
                        <Route path="login" element={<SignIn />} />
                        <Route path="registration" element={<Registration />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="check_email" element={<CheckEmail />} />
                        <Route path="password_recovery" element={<CreateNewPassword />} />
                        <Route path="enter_new_password" element={<ForgotPassword />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Grid>
            </Container>
            <Links />
            <ErrorSnackbar />
        </BrowserRouter>
    );
};

export default App;
