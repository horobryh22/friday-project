import { GetCardType } from 'api/types/cards/GetCardType/GetCardType';

export type GetCurrentCardResponseType = {
    cards: GetCardType[];
    cardsTotalCount: number;
    maxGrade: number;
    minGrade: number;
    page: number;
    pageCount: number;
    packUserId: string;
};
