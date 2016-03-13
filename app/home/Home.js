import React, {
  Component
} from 'react';

import classNames from 'classnames';

import Card from './../common/components/Card';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      profile : JSON.parse(window.localStorage.getItem('linkedinProfile'))
    }
  }

  render(){
    console.log(this.state);
    return (
      <div className={classNames('column','home')}>
        <Card cardHeader={'Summary'}>
          <div>
            <img className={classNames('rounded','profile-image')} src={this.state.profile.pictureUrls.values[0]} />
            <div>{this.state.profile.summary}</div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Home;
