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
import Resume from './../resume/Resume';

class Landing extends Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Loading}/>
        <Route path="/home" component={Home}/>
        <Route path="/resume" component={Resume}/>
      </Router>
    );
  }
}

export default Landing;
