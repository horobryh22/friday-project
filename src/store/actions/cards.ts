import { GetCardsType } from 'api/types/cards/GetCardType/GetCardsType';
import { SET_CARDS } from 'store/actions/constants';
import { SetCardsType } from 'store/actions/types';

export const setCardsAC = (data: GetCardsType): SetCardsType => {
    return {
        type: SET_CARDS,
        payload: { data },
    } as const;
};
