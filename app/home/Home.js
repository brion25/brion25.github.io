import React, {
  Component
} from 'react';

import {
  browserHistory
} from 'react-router';

import classNames from 'classnames';

import Card from './../common/components/Card';

class Home extends Component{
  constructor(props){
    super(props);
    let self = this;
    this.state = {
      profile : JSON.parse(window.localStorage.getItem('linkedinProfile')),
      options : [
        {
          name : 'Resume',
          url : '/resume',
          callback : self.changePath,
          parent : self
        },
        {
          name : 'Github',
          url : '/github',
          callback : self.changePath,
          parent : self
        }
      ],
      cardStyle : {'almost-flip-card' : null, 'totally-flip-card' : null}
    }
  }

  render(){
    console.log(this.state);
    return (
      <div className={classNames('column','home')}>
        <Card cardHeader={'Summary'} cardStyle={['card-style-1','profile-card',this.state.cardStyle]} options={this.state.options}>
          <div className={classNames('row','center-items','wrap-content','center-content','profile')}>
            <img className={classNames('rounded','profile-image')} src={this.state.profile.pictureUrls.values[0]} />
            <div className={classNames('container','column', 'profile-summary')}>
              <h3 className={classNames('profile-header')}>{this.state.profile.formattedName}</h3>
              <h4 className={classNames('profile-subheader')}>{this.state.profile.headline}</h4>
              <div>{this.state.profile.summary}</div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  changePath(url){
    let cardStyles = this.state.cardStyle;
    cardStyles['totally-flip-card'] = true;
    this.setState({
      cardStyle : cardStyles
    });
    setTimeout(function () {
      browserHistory.push(url);
    }, 501);
  }
}

export default Home;
