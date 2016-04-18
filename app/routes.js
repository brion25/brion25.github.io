import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Home from './home/Home.js';
import Myself from './myself/Myself.js';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Myself} />
      <Route path="myself" component={Myself} />
    </Route>
  </Router>
)
