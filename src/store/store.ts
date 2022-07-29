import { devToolsEnhancer } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { appReducer, authReducer } from 'store/reducers';

const composedEnhancers = compose(applyMiddleware(thunk), devToolsEnhancer());

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
});

export const store = createStore(rootReducer, undefined, composedEnhancers);