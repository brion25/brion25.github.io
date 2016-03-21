import React,{
  Component
} from 'react';

import classNames from 'classnames';

import Card from './../common/components/Card';

class Resume extends Component{
  constructor(props){
    super(props);
    let self = this;
    this.state = {
      profile : JSON.parse(window.localStorage.getItem('linkedinProfile'))
    }
  }

  render(){
    return (
      <div className={classNames('column','resume')}>
        <Card cardHeader={'Resume'} cardStyle={['card-style-2',this.state.cardStyle]} goBack={true}>
          <div className={classNames('column', 'resume-content')}>
            <div className={classNames('row','wrap-content','md-left-content','sm-center-content')}>
              <img className={classNames('rounded','resume-image')} src={this.state.profile.pictureUrls.values[0]} />
              <div className={classNames('column', 'resume-header')}>
                <h2>{this.state.profile.formattedName}</h2>
                <h3>{this.state.profile.headline}</h3>
                <div className={classNames('row','resume-contact')}>
                  <a href={this.state.profile.publicProfileUrl}>LinkedInProfile</a>
                  <a href={'mailto://'+this.state.profile.emailAddress}>{this.state.profile.emailAddress}</a>
                </div>
              </div>
            </div>
            <div className={classNames('row','wrap-content','md-left-content','sm-center-content')}>
              <p>{this.state.profile.summary}</p>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Resume;
