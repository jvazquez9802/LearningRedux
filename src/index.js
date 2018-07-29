import React from 'react';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';

import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

import {createStore} from 'redux';
/*
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
*/

/*const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);


*/
//const store = createStore();
render(
<Provider>
    <Router>
        <AppRoutes/>
    </Router>
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
