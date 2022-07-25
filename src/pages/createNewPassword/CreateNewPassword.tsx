import React from 'react';

import { FormControl, FormGroup, FormLabel, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import classes from './CreateNewPassword.module.css';

import { StyledButton } from 'components/header/styles';
import { PASSWORD_RULES } from 'constant';
import { useVisibility } from 'hooks';
import { ReturnComponentType } from 'types';

export const CreateNewPassword = (): ReturnComponentType => {
    const [visible, visibility] = useVisibility(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            password: '',
        },
        mode: 'onChange',
    });

    const onSubmit = ({ password }: { password: string }): void => {
        console.log(password);
    };

    return (
        <div className={classes.formWrapper}>
            <h1 className={classes.title}>Create new password</h1>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth>
                    <FormGroup>
                        <Controller
                            name="password"
                            control={control}
                            rules={PASSWORD_RULES}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    variant="standard"
                                    type={`${visibility ? 'text' : 'password'}`}
                                    label="Password"
                                    margin="normal"
                                    color={`${errors.password ? 'error' : 'primary'}`}
                                    InputProps={{
                                        endAdornment: visible,
                                    }}
                                />
                            )}
                        />
                        <div className={classes.error}>{errors.password?.message}</div>
                        <FormLabel>
                            <p className={classes.label}>
                                Create new password and we will send you further
                                instructions to email
                            </p>
                        </FormLabel>
                        <StyledButton type="submit" variant="contained" color="primary">
                            Create new password
                        </StyledButton>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
};
