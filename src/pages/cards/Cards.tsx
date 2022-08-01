import React, { useEffect } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Table, TextField } from '@mui/material';

import classes from 'pages/profile/Profile.module.css';
import { ReturnComponentType } from 'types';

const cardsPackId = '62e7e69c9b70793ad87b163f';
const pageTitle = 'Name pack';

export const Cards = (): ReturnComponentType => {
    useEffect(() => {}, [console.log(cardsPackId)]);

    return (
        <>
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
            <h1>{pageTitle}</h1>
            <TextField fullWidth label="Search" />
            <Table />
        </>
    );
};
