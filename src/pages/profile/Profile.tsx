import React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';

import classes from './Profile.module.css';

import { EditableSpan } from 'components/profile/EditableSpan';
import { useTypedSelector } from 'hooks';
import { ReturnComponentType } from 'types';

export const Profile = (): ReturnComponentType => {
    const { authUserData } = useTypedSelector(state => state.auth);

    const editTitle = (): void => {};

    return (
        <div className={classes.container}>
            <div className={classes.BackToPack}>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div
                    style={{ display: 'flex', justifyContent: 'center' }}
                    onClick={() => {}}
                >
                    <ArrowBackIcon />
                    Back to packs List
                </div>
            </div>
            <div className={classes.rectangle}>
                <div className={classes.personalInfo}>Personal Information</div>
                <div className={classes.avatarBox}>
                    <img alt="avatar" />
                    <PhotoCameraRoundedIcon
                        onClick={() => {}}
                        className={classes.avatarCamera}
                    />
                </div>
                <div className={classes.nickName}>
                    <EditableSpan title={authUserData.name} editTitle={editTitle} />
                </div>
                <div className={classes.eMail}>{authUserData.email}</div>
                <div className={classes.logOutBtn}>
                    <button
                        type="button"
                        onClick={() => {}}
                        style={{
                            border: 'none',
                            background: 'transparent',
                            width: '127px',
                        }}
                    >
                        <LogoutIcon />
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
};
