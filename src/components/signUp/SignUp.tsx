import React, { useState } from 'react';

import { Container, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { UserDataType } from 'api/types';
import { FormBottomPart } from 'components/formBottomPart/FormBottomPart';
import s from 'components/signUp/signUp.module.css';
import { SignUpFormType } from 'components/signUp/types';
import { useAppDispatch, useVisibility } from 'hooks';
import { registerUser } from 'store/middlewares/registerUser';
import { ReturnComponentType } from 'types';

export const EmailRegExp = /^[\w][\w-.]*@[\w-]+\.[a-z]{2,7}$/i;

export const SignUp = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [visible, visibility] = useVisibility(false);
    const [passError, setPassError] = useState('');
    const [success, setSuccess] = useState(false);

    const inputType = visibility ? 'text' : 'password';
    const wrapperCLassName = success ? 'success' : '';
    const intervalToRedirect = 700;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormType>({ mode: 'onBlur' });

    const onSubmit = (data: SignUpFormType): void => {
        if (data.password === data.passwordConfirm) {
            dispatch(registerUser(data as UserDataType));
            setSuccess(true);
            setTimeout(() => {
                navigate('/login');
            }, intervalToRedirect);
        } else {
            console.log('pass not match!');
            setPassError('passwords do not match');
        }
    };

    return (
        <div className={`${s.wrapper} ${s[wrapperCLassName]}`}>
            <Container>
                <h1 className={s.title}>Sign Up</h1>
                <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: EmailRegExp,
                                message: 'Not valid email',
                            },
                        })}
                        fullWidth
                        margin="normal"
                        variant="standard"
                        label="Email"
                    />
                    <p className={s.errorWrapper}>
                        {errors?.email && (
                            <span className={s.error}>
                                {errors.email.message || 'Required'}
                            </span>
                        )}
                    </p>
                    <div className={s.formGroup}>
                        <TextField
                            {...register('password', {
                                required: true,
                                minLength: {
                                    value: 8,
                                    message: 'Min length is 8',
                                },
                            })}
                            fullWidth
                            type={inputType}
                            margin="normal"
                            label="Password"
                            variant="standard"
                        />
                        {visible}
                    </div>
                    <p className={s.errorWrapper}>
                        {errors?.password && (
                            <span className={s.error}>
                                {errors.password.message || 'Required'}
                            </span>
                        )}
                    </p>
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
                    <p className={s.errorWrapper}>
                        <span className={s.error}>{passError}</span>
                    </p>
                    <FormBottomPart
                        buttonName="Sign Up"
                        helperText="Already have an account?"
                        linkText="Sign In"
                        redirectTo="/login"
                    />
                </form>
            </Container>
        </div>
    );
};
