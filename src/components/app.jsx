import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Articles from './articles';
import Article from './article';
import Hero from '../pages/hero';

export default function App() {
    return(
        <Router history={createBrowserHistory()}>
            <Hero/>
            <Switch>
                <Route path="/" exact component={Articles} />
                <Route path="/:slug" component={Article} />
            </Switch>
        </Router>
    )
}