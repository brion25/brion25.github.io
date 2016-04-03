import React,{
  Component
} from 'react';

import classNames from 'classnames';
import moment from 'moment';

import Card from './../common/components/Card';

class Resume extends Component{
  constructor(props){
    super(props);
    let self = this,
        profile = JSON.parse(window.localStorage.getItem('linkedinProfile'));
    this.state = {
      pictureUrl : profile.pictureUrls.values[0],
      formattedName : profile.formattedName,
      headline : profile.headline,
      summary : profile.summary,
      publicProfileUrl : profile.publicProfileUrl,
      emailAddress : profile.emailAddress,
      positions : profile.positions,
      scrollY : null
    }
  }

  render(){
    return (
      <div className={classNames('column','resume')}>
        <Card cardHeader={'Resume'} cardStyle={['card-style-2',this.state.cardStyle]} goBack={true}>
          <div className={classNames('column', 'resume-content')}>
            <div className={classNames('row','wrap-content','md-left-content','sm-center-content')}>
              <img className={classNames('rounded','resume-image')} src={this.state.pictureUrl} />
              <div className={classNames('column', 'resume-header')}>
                <h2>{this.state.formattedName}</h2>
                <h3>{this.state.headline}</h3>
                <div className={classNames('row','resume-contact')}>
                  <a href={this.state.publicProfileUrl}>See LinkedIn Profile</a>
                  <a href={'mailto://'+this.state.emailAddress}>{this.state.emailAddress}</a>
                </div>
              </div>
            </div>
            <div className={classNames('row','wrap-content','md-left-content','sm-center-content')}>
              <p>{this.state.summary}</p>
            </div>
            <div className={classNames('row','wrap-content')}>
              <h4 className={classNames('resume-title','cell','center-text')}>Previous Experience</h4>
            </div>
            {this.state.positions.values.map(this.renderPositions.bind(this))}
          </div>
        </Card>
      </div>
    );
  }

  renderPositions(position, i){
    let startDate = moment(position.startDate).format('MMMM YYYY'),
        endDate = null,
        summary = position.summary.split('\n');

    if(position.isCurrent) endDate = 'Present';
    else endDate = moment(position.endDate).format('MMMM YYYY');
    return (
      <div className={classNames('row','wrap-content','resume-position')} onClick={this.changeToPositionDetailed.bind(this)}>
        <div className={classNames('column','wrap-content')}>
          <h4 className={classNames('position-title','cell')}>{position.title}</h4>
          <h3 className={classNames('position-company','cell')}>
            {position.company.name}
            <small>{startDate} - {endDate}</small>
          </h3>
        </div>
        <div className={classNames('arrow','position-arrow')}></div>
      </div>
    );
  }

  changeToPositionDetailed(){
    browserHistory.push('/position');
  }
}

export default Resume;
