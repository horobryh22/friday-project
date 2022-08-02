import { CardsType } from 'api/types/cards/GetCardType/GetCardsType';
import { AppRootState } from 'store/types';

export const selectCards = (state: AppRootState): CardsType[] => {
    return state.cards.cards;
};
