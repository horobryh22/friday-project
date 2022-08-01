import { PacksStateType } from './types';

import { SET_CARD_PACKS } from 'store/actions/constants';
import { PacksActionsType } from 'store/actions/types';

const initialState: PacksStateType = {
    cardPacks: [],
    searchParams: {
        packName: '',
        min: 1,
        max: 4,
        sortPacks: '',
        page: 1,
        pageCount: 8,
        user_id: '',
    },
};

export const packsReducer = (
    state = initialState,
    action: PacksActionsType,
): PacksStateType => {
    switch (action.type) {
        case SET_CARD_PACKS:
            return { ...state, cardPacks: action.payload.cardPacks };
        default:
            return state;
    }
};
