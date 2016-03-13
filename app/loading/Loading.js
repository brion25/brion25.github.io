import React,{
  Component
} from 'react';

import {
  browserHistory
} from 'react-router';

import classNames from 'classnames';
import CircularProgress from 'material-ui/lib/circular-progress';

class Loading extends Component{
  constructor(props){
    super(props);
    this.state = {
      loadHome : false,
      profile : null
    }

    let self = this;

    const profileInterval = setInterval(function () {
      if(window.localStorage){
        let profile = window.localStorage.getItem('linkedinProfile');
        if(profile !== ''){
          profile = JSON.parse(profile);
          window.clearInterval(profileInterval);
          self.setState({
            profile : profile
          });
        }
      }else{
        window.clearInterval(profileInterval);
      }
    }, 100);
  }

  render(){
    let self = this,
        loaded = false,
        profilePicture = null,
        profileImg = null

    if(this.state.profile){
      profilePicture = this.state.profile.pictureUrls.values[0];
      loaded = true;
      if(!self.state.loadHome){
        setTimeout(function () {
          self.setState({
            loadHome:true
          });
          setTimeout(function () {
            browserHistory.push('/home');
          }, 501);
        }, 1000);
      }
    }

    profileImg = (
      <img
        src={profilePicture}
        className={
          classNames(
            {
              'profile-image-loading' : !loaded,
              'profile-image-loaded' : loaded,
              'loading-home':self.state.loadHome
            },
            'profile-image',
            'rounded'
          )
        } />);

    return (
      <div className={classNames('center-text','landing')}>
        {profileImg}
        <div className={classNames({'loaded' : loaded},'loading')}>
          <CircularProgress size={3.5} />
        </div>
      </div>
    );
  }
}

export default Loading;
