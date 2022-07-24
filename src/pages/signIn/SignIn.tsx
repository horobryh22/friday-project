import React from 'react';

import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    TextField,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import classes from './SignIn.module.css';
import { SignInValuesType } from './types';

import { FormBottomPart } from 'components';
import { useAppDispatch, useVisibility } from 'hooks';
import { login } from 'store';
import { ReturnComponentType } from 'types';

export const SignIn = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [visible, visibility] = useVisibility(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        mode: 'onChange',
    });

    const onSubmit = (values: SignInValuesType): void => {
        dispatch(login(values));
    };

    return (
        <Grid container justifyContent="center">
            <Grid item justifyContent="center">
                <div className={classes.formWrapper}>
                    <h1>Sign In</h1>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <FormControl fullWidth>
                            <FormGroup>
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{
                                        required: 'Email is required',
                                        pattern: {
                                            message: 'Enter the correct email',
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        },
                                    }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            variant="standard"
                                            label="Email"
                                            margin="normal"
                                            color={`${
                                                errors.email ? 'error' : 'primary'
                                            }`}
                                        />
                                    )}
                                />
                                <div className={classes.error}>
                                    {errors.email?.message}
                                </div>
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{
                                        required: 'Password is required',
                                        minLength: {
                                            message:
                                                'Password must be more than 7 characters',
                                            value: 7,
                                        },
                                    }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            variant="standard"
                                            type={`${visibility ? 'text' : 'password'}`}
                                            label="Password"
                                            margin="normal"
                                            color={`${
                                                errors.email ? 'error' : 'primary'
                                            }`}
                                            InputProps={{
                                                endAdornment: visible,
                                            }}
                                        />
                                    )}
                                />
                                <div className={classes.error}>
                                    {errors.password?.message}
                                </div>
                                <Controller
                                    name="rememberMe"
                                    control={control}
                                    render={({ field }) => (
                                        <FormControlLabel
                                            {...field}
                                            label="Remember me"
                                            checked
                                            control={<Checkbox />}
                                        />
                                    )}
                                />
                                <NavLink
                                    style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        textAlign: 'right',
                                        marginTop: '9px',
                                    }}
                                    to="/enter_new_password"
                                >
                                    Forgot password?
                                </NavLink>
                                <FormBottomPart
                                    buttonName="Sign In"
                                    helperText="Don’t have an account?"
                                    linkText="Sign Up"
                                />
                            </FormGroup>
                        </FormControl>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};
