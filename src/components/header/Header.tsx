import React from 'react';

import { Box, Container } from '@mui/material';

import { StyledAppBar, StyledButton, StyledToolbar } from './styles';

import logo from 'assets/images/logo.svg';
import { UserPhoto } from 'components/userPhoto/UserPhoto';
import { useTypedSelector } from 'hooks';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
    const isUserAuth = useTypedSelector(state => state.auth.isUserAuth);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledAppBar position="static">
                <Container>
                    <StyledToolbar>
                        <img src={logo} alt="logo" />
                        {isUserAuth ? (
                            <UserPhoto variant="small" />
                        ) : (
                            <StyledButton variant="contained">Sign In</StyledButton>
                        )}
                    </StyledToolbar>
                </Container>
            </StyledAppBar>
        </Box>
    );
};
