import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'

import AppWrapper from './common/components/AppWrapper.js';
import Twitter from './twitter/Twitter.js';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

export default (
  <Router history={appHistory}>
    <Route path="/" component={AppWrapper}>
      <IndexRoute component={Twitter}/>
      <Route path="twitter" component={Twitter} />
    </Route>
  </Router>
);
