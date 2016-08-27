import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'

import App from './common/components/App.js';
import Profile from './containers/Profile';
import Blogger from './containers/Blogger';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

export default function(props){
    return (
      <Router history={appHistory}>
        <Route path="/" component={App(React)}>
          <IndexRoute component={Profile(React)} />
          <Route path="profile" component={Profile(React)} />
          <Route path="blog" component={Blogger(React)} />
        </Route>
      </Router>
    );
}
