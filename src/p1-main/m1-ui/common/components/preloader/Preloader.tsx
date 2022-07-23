import React from 'react';

import classes from './Preloader.module.css';

import { ReturnComponentType } from 'types';

export const Preloader = (): ReturnComponentType => {
    return (
        <div className={classes.preloader}>
            <img src="" alt="preloader" />
        </div>
    );
};
