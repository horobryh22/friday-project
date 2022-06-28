import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Header} from './header/Header';
import {RoutesComponent} from './routes/RoutesComponent';
import {useAppDispatch, useTypedSelector} from '../m2-bll/hooks/hooks';
import {changeLoadingStatus} from '../m2-bll/reducers/loading-reducer';
import {Preloader} from './common/components/preloader/Preloader';

const App = () => {

    const isLoading = useTypedSelector(state => state.loading.isLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const id = setTimeout(() => {
            dispatch(changeLoadingStatus());
        }, 2000);

        return () => {
            clearTimeout(id);
        };
    }, []);

    return (
        <BrowserRouter>
            <div className={'container'}>
                <Header/>
                <RoutesComponent/>
                {isLoading && <Preloader/>}
            </div>
        </BrowserRouter>
    );
}

export default App;
