import { CardsSortType } from 'api/types';
import { SET_SORT_CARDS } from 'store/actions/constants';

export type SetSortCardsType = {
    type: typeof SET_SORT_CARDS;
    payload: { sort: CardsSortType };
};
