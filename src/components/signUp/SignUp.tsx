import React, { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Container, IconButton, Paper, TextField } from '@mui/material';

import { StyledButton } from 'components/header/styles';
import s from 'components/signUp/signUp.module.css';
import { ReturnComponentType } from 'types';

const SignUp = (): ReturnComponentType => {
    const [visibility, setVisibility] = useState(false);

    const handleVisibility = (flag: boolean): void => {
        setVisibility(flag);
    };

    const visible = visibility ? (
        <IconButton aria-label="visibility" onClick={() => handleVisibility(false)}>
            <VisibilityIcon />
        </IconButton>
    ) : (
        <IconButton aria-label="visibilityOff" onClick={() => handleVisibility(true)}>
            <VisibilityOffIcon />
        </IconButton>
    );

    return (
        <Paper elevation={3} className={s.wrapper}>
            <Container>
                <h1>Sign Up</h1>
                <form className={s.form}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Email"
                        variant="standard"
                    />
                    <div className={s.formGroup}>
                        <TextField
                            fullWidth
                            type="password"
                            margin="normal"
                            label="Password"
                            variant="standard"
                        />
                        {visible}
                    </div>
                    <div className={s.formGroup}>
                        <TextField
                            fullWidth
                            type="password"
                            margin="normal"
                            label="Confirm Password"
                            variant="standard"
                        />
                        {visible}
                    </div>
                    <StyledButton className={s.button} variant="contained" type="submit">
                        Sign Up
                    </StyledButton>
                </form>
            </Container>
        </Paper>
    );
};

export default SignUp;
