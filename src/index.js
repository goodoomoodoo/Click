import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { configureStore } from './redux/store';

const state = window.__INITIAL_STATE__;

delete window.__INITIAL_STATE__;

const store = configureStore( state );

ReactDOM.hydrate(
    <Provider store={ store }>
        <Router>
            <Route component={ App } />
        </Router>
    </Provider>,
    document.getElementById('root')
);