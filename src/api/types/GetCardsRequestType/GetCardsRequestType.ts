import { SortTypes } from 'api/types';

export type GetCardsRequestType = {
    packName?: string;
    min?: number;
    max?: number;
    sortPacks?: SortTypes;
    page?: number;
    pageCount?: number;
    user_id?: string;
};
