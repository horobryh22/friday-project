import React from 'react';

import { FormControl, FormGroup, FormLabel, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import classes from './ForgotPassword.module.css';

import { FormBottomPart } from 'components';
import { EMAIL_RULES } from 'constant';
import { useAppDispatch } from 'hooks';
import { forgot } from 'store/middlewares';
import { ReturnComponentType } from 'types';

export const ForgotPassword = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
        },
        mode: 'onChange',
    });

    const onSubmit = ({ email }: { email: string }): void => {
        dispatch(forgot(email));
    };

    return (
        <div className={classes.formWrapper}>
            <h1 className={classes.title}>Forgot your password?</h1>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth>
                    <FormGroup>
                        <Controller
                            name="email"
                            control={control}
                            rules={EMAIL_RULES}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    variant="standard"
                                    label="Email"
                                    margin="normal"
                                    color={`${errors.email ? 'error' : 'primary'}`}
                                />
                            )}
                        />
                        <div className={classes.error}>{errors.email?.message}</div>
                        <FormLabel>
                            <p className={classes.label}>
                                Enter your email address and we will send you further
                                instructions
                            </p>
                        </FormLabel>
                        <FormBottomPart
                            buttonName="Send Instructions"
                            helperText="Did you remember your password?"
                            linkText="Try logging in"
                            redirectTo="/login"
                        />
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
};
