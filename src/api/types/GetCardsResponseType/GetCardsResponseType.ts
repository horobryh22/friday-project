import { CardType } from 'api/types';

export type GetCardsResponseType = {
    cardPacks: CardType[];
    page: number;
    pageCount: number;
    cardPacksTotalCount: number;
    minCardsCount: number;
    maxCardsCount: number;
    token: string;
    tokenDeathTime: number;
};
