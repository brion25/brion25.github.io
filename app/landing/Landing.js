import React, {
  Component
} from 'react';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

import Loading from './../loading/Loading';
import Home from './../home/Home';
import Github from './../github/Github';
import Resume from './../resume/Resume';
import Position from './../position/Position';

class Landing extends Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Loading}/>
        <Route path="/home" component={Home}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/github" component={Github}/>
        <Route path="/position/:positionId" component={Position}/>
      </Router>
    );
  }
}

export default Landing;
