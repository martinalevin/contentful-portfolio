import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Articles from './articles';
import Article from './article';

export default function App() {
    return(
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route path="/" exact component={Articles} />
                <Route path="/:id" component={Article} />
            </Switch>
        </Router>
    )
}