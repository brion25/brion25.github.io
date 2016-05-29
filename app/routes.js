import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'

import AppWrapper from './common/components/AppWrapper.js';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

export default (
  <Router history={appHistory}>
    <Route path="/" component={AppWrapper}>
    </Route>
  </Router>
);
