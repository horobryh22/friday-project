import { setCardsAC, setSortCardsAC } from 'store/actions/cards';

export type CardsActionType =
    | ReturnType<typeof setCardsAC>
    | ReturnType<typeof setSortCardsAC>;
