import React, { useEffect } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink, useParams } from 'react-router-dom';

import s from './Cards.module.css';

import { SearchParamsCardsType } from 'api/types';
import { CardsList } from 'components/cartdList/CardsList';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { fetchCards } from 'store/middlewares';
import { selectCardPacks, selectCards } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Cards = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const { cardsPack_id } = useParams();

    const cards = useTypedSelector(selectCards);
    const packs = useTypedSelector(selectCardPacks);
    const currentPuck = packs.find(pack => pack._id === cardsPack_id);
    const currentPuckName = currentPuck?.name || '';

    console.log(currentPuckName);

    useEffect(() => {
        dispatch(fetchCards({ cardsPack_id } as SearchParamsCardsType));
    }, []);

    return (
        <div className={s.wrapper}>
            <NavLink to="/packs" className={s.breadcrumbs}>
                <ArrowBackIcon />
                <span>Back to packs List</span>
            </NavLink>
            <h3 className={s.title}>{currentPuckName}</h3>
            <CardsList cards={cards} cardsPack_id={cardsPack_id || ''} />
        </div>
    );
};
