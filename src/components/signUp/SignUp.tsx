import React, { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, Container, IconButton, Paper, TextField } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import { UserDataType } from 'api/types';
import { StyledButton } from 'components/header/styles';
import s from 'components/signUp/signUp.module.css';
import { useAppDispatch } from 'hooks';
import { registerUser } from 'store/middlewares/registerUser';
import { ReturnComponentType } from 'types';

export const SignUp = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [visibility, setVisibility] = useState(false);
    const inputType = visibility ? 'text' : 'password';

    const { register, handleSubmit } = useForm();

    const handleVisibility = (flag: boolean): void => {
        setVisibility(flag);
    };

    const visible = visibility ? (
        <IconButton aria-label="visibilityOff" onClick={() => handleVisibility(false)}>
            <VisibilityOffIcon />
        </IconButton>
    ) : (
        <IconButton aria-label="visibility" onClick={() => handleVisibility(true)}>
            <VisibilityIcon />
        </IconButton>
    );

    const submitHandler = (data: FieldValues): void => {
        dispatch(registerUser(data as UserDataType));
        console.log(data);
    };

    return (
        <Paper elevation={3} className={s.wrapper}>
            <Container>
                <h1>Sign Up</h1>
                <form
                    className={s.form}
                    onSubmit={handleSubmit(data => submitHandler(data))}
                >
                    <TextField
                        {...register('email')}
                        fullWidth
                        margin="normal"
                        label="Email"
                        variant="standard"
                    />
                    <div className={s.formGroup}>
                        <TextField
                            {...register('password')}
                            fullWidth
                            type={inputType}
                            margin="normal"
                            label="Password"
                            variant="standard"
                        />
                        {visible}
                    </div>
                    <div className={s.formGroup}>
                        <TextField
                            {...register('passwordConfirm')}
                            fullWidth
                            type={inputType}
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
                <p className={s.tooltip}>Already have an account?</p>
                <Button variant="text">
                    <NavLink to="/login" className={s.redirect}>
                        Sign in
                    </NavLink>
                </Button>
            </Container>
        </Paper>
    );
};
