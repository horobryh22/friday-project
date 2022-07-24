import React from 'react';

import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    Grid,
    TextField,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import classes from './SignIn.module.css';

import { StyledButton } from 'components/header/styles';
import { useVisibility } from 'hooks/useVisibility/useVisibility';
import { ReturnComponentType } from 'types';

export const SignIn = (): ReturnComponentType => {
    const [visible, visibility] = useVisibility(false);

    return (
        <Grid container justifyContent="center">
            <Grid item justifyContent="center">
                <div className={classes.formWrapper}>
                    <h1>Sign In</h1>
                    <form className={classes.form}>
                        <FormControl fullWidth>
                            <FormGroup>
                                <TextField
                                    variant="standard"
                                    label="Email"
                                    margin="normal"
                                />
                                <TextField
                                    variant="standard"
                                    type={`${visibility ? 'text' : 'password'}`}
                                    label="Password"
                                    margin="normal"
                                    InputProps={{
                                        endAdornment: visible,
                                    }}
                                />
                                <FormControlLabel
                                    label="Remember me"
                                    checked
                                    control={<Checkbox />}
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
                                <StyledButton
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    style={{ marginTop: '60px' }}
                                >
                                    Sign In
                                </StyledButton>
                            </FormGroup>
                        </FormControl>
                    </form>
                    <FormHelperText>{`Don't have an account?`}</FormHelperText>
                    <NavLink to="/registration">Sign Up</NavLink>
                </div>
            </Grid>
        </Grid>
    );
};
