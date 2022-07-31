import React from 'react';

import classes from './CardsTopContent.module.css';
import { CardsTopContentType } from './types';

import { StyledButton } from 'components/header/styles';
import { ReturnComponentType } from 'types';

export const CardsTopContent = ({
    isButtonNeed,
    buttonName,
    title,
}: CardsTopContentType): ReturnComponentType => {
    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>{title}</h2>
            <div>
                {isButtonNeed && (
                    <StyledButton variant="contained" style={{ padding: '8px 28px' }}>
                        {buttonName}
                    </StyledButton>
                )}
            </div>
        </div>
    );
};
