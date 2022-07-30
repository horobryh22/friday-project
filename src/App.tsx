import React, { useEffect } from 'react';

import { LinearProgress } from '@mui/material';

import { Header, Links, RoutesApp, SnackBar } from 'components';
import { PROGRESS_STYLE } from 'constant';
import { REQUEST_STATUS } from 'enums';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { me } from 'store/middlewares';
import { selectAppStatus } from 'store/selectors';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const status = useTypedSelector(selectAppStatus);

    useEffect(() => {
        dispatch(me());
    }, []);

    return (
        <>
            {status === REQUEST_STATUS.LOADING && (
                <LinearProgress style={PROGRESS_STYLE} color="primary" />
            )}
            <Header />
            <RoutesApp />
            <Links />
            <SnackBar />
        </>
    );
};

export default App;
