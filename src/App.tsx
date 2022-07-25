import React from 'react';

import { Container, Grid, LinearProgress } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ErrorSnackbar, Header, Links } from 'components';
import { PROGRESS_STYLE } from 'constant';
import { REQUEST_STATUS } from 'enums';
import { useTypedSelector } from 'hooks';
import {
    CheckEmail,
    CreateNewPassword,
    ForgotPassword,
    NotFound,
    Profile,
    Registration,
    SignIn,
} from 'pages';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    const status = useTypedSelector(state => state.app.status);

    return (
        <BrowserRouter>
            {status === REQUEST_STATUS.LOADING && (
                <LinearProgress style={PROGRESS_STYLE} color="primary" />
            )}
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
