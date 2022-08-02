import { CardsSortType } from 'api/types';
import { GetCardsType } from 'api/types/cards/GetCardType/GetCardsType';
import { SET_CARDS, SET_SORT_CARDS } from 'store/actions/constants';
import { SetCardsType } from 'store/actions/types';
import { SetSortCardsType } from 'store/actions/types/SetSortCardsType';

export const setCardsAC = (data: GetCardsType): SetCardsType => {
    return {
        type: SET_CARDS,
        payload: { data },
    } as const;
};

export const setSortCardsAC = (sort: CardsSortType): SetSortCardsType => {
    return {
        type: SET_SORT_CARDS,
        payload: { sort },
    } as const;
};
