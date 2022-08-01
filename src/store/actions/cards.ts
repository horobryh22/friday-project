import { GetCardType } from 'api/types';
import { SET_CARDS } from 'store/actions/constants';
import { SetCardsType } from 'store/actions/types';

export const setCardsAC = (cards: GetCardType[]): SetCardsType => {
    return {
        type: SET_CARDS,
        payload: { cards },
    } as const;
};
