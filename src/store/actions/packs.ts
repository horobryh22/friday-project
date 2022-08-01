import { SET_CARD_PACKS } from './constants';
import { SetCardPacksType } from './types';

import { CardType } from 'api/types';

export const setCardPacksAC = (cardPacks: CardType[]): SetCardPacksType => {
    return {
        type: SET_CARD_PACKS,
        payload: { cardPacks },
    } as const;
};
