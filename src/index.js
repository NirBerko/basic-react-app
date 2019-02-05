import React              from 'react';
import ReactDOM           from 'react-dom';
import {Provider}         from 'react-redux';
import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
}                         from 'redux';
import ReduxPromise       from 'redux-promise-middleware';
import {BrowserRouter}    from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import reducers from './services/reducers';

import App from './App';

import 'normalize.css';
import './index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({...reducers}), composeEnhancers(applyMiddleware(ReduxPromise())));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
