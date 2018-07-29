import React from 'react';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';

import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

import {createStore} from 'redux';
import allData from './data/movies_reducer';
/*
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

*/

/*const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);


*/
const store = createStore(allData);
render(
<Provider store = {store}>
    <Router>
        <AppRoutes/>
    </Router>
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
