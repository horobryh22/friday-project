import React, { useEffect } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from 'react-router-dom';

import { SearchParamsCardsType } from 'api/types';
import { CardsList } from 'components/cartdList/CardsList';
import { useAppDispatch, useTypedSelector } from 'hooks';
import classes from 'pages/profile/Profile.module.css';
import { fetchCards } from 'store/middlewares';
import { selectCards } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Cards = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const { cardsPack_id } = useParams();

    const cards = useTypedSelector(selectCards);

    useEffect(() => {
        dispatch(fetchCards({ cardsPack_id } as SearchParamsCardsType));
    }, []);

    console.log(cards);

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
            <CardsList cards={cards} />
        </>
    );
};
