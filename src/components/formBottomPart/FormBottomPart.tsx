import React from 'react';

import { FormHelperText } from '@mui/material';
import { NavLink } from 'react-router-dom';

import classes from './FormBottomPart.module.css';
import { FormBottomPartType } from './types';

import { StyledButton } from 'components/header/styles';
import { ReturnComponentType } from 'types';

export const FormBottomPart: React.FC<FormBottomPartType> = ({
    linkText,
    helperText,
    buttonName,
}): ReturnComponentType => {
    return (
        <div className={classes.wrapper}>
            <StyledButton type="submit" variant="contained" color="primary">
                {buttonName}
            </StyledButton>
            <FormHelperText>{helperText}</FormHelperText>
            <NavLink to="/registration">{linkText}</NavLink>
        </div>
    );
};
