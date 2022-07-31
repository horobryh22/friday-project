import { SortTypes } from 'api/types/index';

export type GetCardsRequestType = {
    packName?: string;
    min?: number;
    max?: number;
    sortPacks?: SortTypes;
    page?: number;
    pageCount?: number;
    user_id?: string;
};
