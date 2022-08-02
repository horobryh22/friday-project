import React from 'react';

import classes from './CardsTopContent.module.css';
import { CardsTopContentType } from './types';

import { StyledButton } from 'components/header/styles';
import { useAppDispatch } from 'hooks';
import { addCardsPack } from 'store/middlewares';
import { ReturnComponentType } from 'types';

export const CardsTopContent: React.FC<CardsTopContentType> = ({
    isButtonNeed,
    buttonName,
    title,
    children,
}): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const handleClick = (): void => {
        dispatch(addCardsPack('Test pack'));
    };

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>{title}</h2>
            <div>
                {children && children}
                {isButtonNeed && (
                    <StyledButton
                        variant="contained"
                        style={{ padding: '8px 28px' }}
                        onClick={handleClick}
                    >
                        {buttonName}
                    </StyledButton>
                )}
            </div>
        </div>
    );
};
