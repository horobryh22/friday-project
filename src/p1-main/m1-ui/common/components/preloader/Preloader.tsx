import React from 'react';
import preloader from '../../../assets/image/Preloader.gif';
import classes from './Preloader.module.css';

export const Preloader = () => {
    return (
        <div className={classes.preloader}>
            <img src={preloader} alt="preloader"/>
        </div>
    );
};
