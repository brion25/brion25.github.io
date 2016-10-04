import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'

import App from './common/components/App.js';
import Profile from './containers/Profile';
import Blogger from './containers/Blogger';
import Portfolio from './portfolio';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

export default function(props){
    return (
      <Router history={appHistory}>
        <Route path="/" component={App(React)}>
          <IndexRoute component={Profile(React)} />
          <Route name="Profile" path="profile" component={Profile(React)} />
          <Route name="Blogger" path="blog" component={Blogger(React)} />
          <Route name="Portfolio" path="portfolio" component={Portfolio(React)} />
        </Route>
      </Router>
    );
}
