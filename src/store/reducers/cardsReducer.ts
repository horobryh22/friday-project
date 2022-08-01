import { GetCardType } from 'api/types';
import { CardsActionType } from 'store/actions/types';

const initialState: GetCardType = {
    answer: '',
    question: '',
    cardsPack_id: '',
    grade: 0,
    shots: 0,
    user_id: '',
    created: '',
    updated: '',
    _id: '',
    comments: '',
    type: '',
    rating: 0,
    more_id: '',
    __v: 0,
};

export const cardsReducer = (
    state = initialState,
    action: CardsActionType,
): GetCardType => {
    switch (action.type) {
        default:
            return state;
    }
};
