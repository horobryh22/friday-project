import {
    setCardPacksAC,
    setCurrentPageAC,
    setPacksTotalCountAC,
    setPageCountAC,
    setSortPacksAC,
} from 'store/actions';

export type PacksActionsType =
    | ReturnType<typeof setCardPacksAC>
    | ReturnType<typeof setSortPacksAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setPacksTotalCountAC>
    | ReturnType<typeof setPageCountAC>;
