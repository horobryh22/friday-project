import React from 'react';
import './App.css';
import Header from './header/Header';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {RoutesComponent} from './routes/RoutesComponent';

const App = () => {

    return (
        <BrowserRouter>
            {/*<Provider store={''}>*/}
                <div>
                    <Header/>
                    <RoutesComponent/>
                </div>
            {/*</Provider>*/}
        </BrowserRouter>
    );
}


export default App;
