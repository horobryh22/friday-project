import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'store/store';

export const useAppDispatch = (): ReturnType<typeof useDispatch<AppDispatch>> =>
    useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
