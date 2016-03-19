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
    this.state = {
      profile : JSON.parse(window.localStorage.getItem('linkedinProfile')),
      options : [
        {
          name : 'Resume',
          url : '/resume'
        },
        {
          name : 'Github',
          url : '/github'
        }
      ],
      cardStyle : ['card-style-1','profile-card']
    }
  }

  render(){
    console.log(this.state);
    return (
      <div className={classNames('column','home')}>
        <Card cardHeader={'Summary'} cardStyle={this.state.cardStyle}>
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

  overCard(flipCard){
    let cardStyles = this.state.cardStyle;
    if(flipCard){
      cardStyles.push('flip-profile-card');
      this.setState({
        cardStyle : cardStyles
      });
    }else{
      cardStyles.splice(cardStyles.length - 1,1);
      this.setState({
        cardStyle : cardStyles
      });
    }
  }

  changePath(url){
    browserHistory.push(url);
  }

  renderOptions(option, i){
    return (
      <button
        key={'option-'+i}
        onMouseOver={this.overCard.bind(this,true)}
        onMouseOut={this.overCard.bind(this,false)}
        className={classNames('profile-option')}
        onClick={this.changePath.bind(this,option.url)}
      >
          {option.name}
      </button>
    );
  }
}

export default Home;
