import React, { useEffect } from 'react';

import { Container, Grid, LinearProgress } from '@mui/material';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { Header, Links, SnackBar } from 'components';
import { PROGRESS_STYLE } from 'constant';
import { REQUEST_STATUS } from 'enums';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { ForgotPassword, Profile, Registration, SetNewPassword, SignIn } from 'pages';
import { me } from 'store/middlewares/me';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(me());
    }, []);

    const status = useTypedSelector(state => state.app.status);

    return (
        <div>
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
                            <Route
                                path="password_recovery/:token"
                                element={<SetNewPassword />}
                            />
                            <Route
                                path="enter_new_password"
                                element={<ForgotPassword />}
                            />
                            <Route path="404" element={<h1>404.PAGE NOT FOUND</h1>} />
                            <Route path="*" element={<Navigate to="/404" />} />
                        </Routes>
                    </Grid>
                </Container>
                <Links />
                <SnackBar />
            </BrowserRouter>
        </div>
    );
};

export default App;
