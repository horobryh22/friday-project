import { ThunkDispatch } from 'redux-thunk';

import { AppRootActionsType, AppRootState } from 'store/types';

export type AppDispatch = ThunkDispatch<AppRootState, unknown, AppRootActionsType>;
