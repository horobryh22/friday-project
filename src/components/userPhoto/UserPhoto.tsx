import React from 'react';

import classes from './UserPhoto.module.css';

import { ReturnComponentType } from 'types';

type VariantType = 'standard' | 'small';
type UserPhotoPropsType = {
    variant: VariantType;
};

export const UserPhoto = ({ variant }: UserPhotoPropsType): ReturnComponentType => {
    const finalClassName = variant;

    return (
        <div
            className={`${classes.container} ${classes[finalClassName]} ${classes.photoBox}`}
        />
    );
};
