//Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './App';
import terror from './components/terror';
import Romance from './components/romance';
import Action from './components/action';
import Home from './components/home';
import Page404 from './components/page404';
import Car from './components/car';

const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path = "/horror" component = {terror} />
        <Route exact path = "/romance" component = {Romance} />
        <Route exact path = "/action" component = {Action} />
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/car" component = {Car}/>
        <Route component = {Page404} />
    </Switch>
</App>

export default AppRoutes;