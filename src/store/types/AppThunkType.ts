import { ThunkAction } from 'redux-thunk';

import { AppRootActionsType, AppRootState } from 'store/types';

export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootState,
    unknown,
    AppRootActionsType
>;
