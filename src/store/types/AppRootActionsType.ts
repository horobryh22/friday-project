import { AuthActionsType } from 'store/actions';
import { AppActionsType } from 'store/actions/types';

export type AppRootActionsType = AuthActionsType | AppActionsType;
