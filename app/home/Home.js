import React, {
  Component
} from 'react';

import classNames from 'classnames';

import Card from './../common/components/Card';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      profile : JSON.parse(window.localStorage.getItem('linkedinProfile')),
      options : [
        {
          name : 'Resume',
          url : 'resume'
        },
        {
          name : 'Github',
          url : 'github'
        }
      ]
    }
  }

  render(){
    console.log(this.state);
    return (
      <div className={classNames('column','home')}>
        <Card cardHeader={'Summary'} cardStyle={'card-style-1'}>
          <div className={classNames('row','center-items','wrap-content','center-content','profile')}>
            <img className={classNames('rounded','profile-image')} src={this.state.profile.pictureUrls.values[0]} />
            <div className={classNames('container','column', 'profile-summary')}>
              <h3 className={classNames('profile-header')}>{this.state.profile.formattedName}</h3>
              <h4 className={classNames('profile-subheader')}>{this.state.profile.headline}</h4>
              <div>{this.state.profile.summary}</div>
            </div>
          </div>
          <div className={classNames('row','center-items','wrap-content','center-content')}>
            {this.state.options.map(this.renderOptions.bind(this))}
          </div>
        </Card>
      </div>
    );
  }

  renderOptions(option, i){
    return (
      <button key={'option-'+i} className={classNames('profile-option')}>{option.name}</button>
    );
  }
}

export default Home;
