import React, {
  Component
} from 'react';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

import Loading from './../loading/Loading';

class Landing extends Component{
  render(){    
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Loading}/>
      </Router>
    );
  }
}

export default Landing;
