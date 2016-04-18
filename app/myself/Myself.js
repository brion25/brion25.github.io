import React, {
  Component
} from 'react';
import mui from 'material-ui';
import classnames from 'classnames';

import jcBanner from './../assets/images/banner.jpg';

const { Card, CardMedia, CardTitle } = mui;

let linkedinProfile = null;

class Myself extends Component{

  componentDidMount(){
    let self = this,
        interval = setInterval(() => {
          let profile = window.localStorage.getItem('linkedinProfile');
          if(profile !== ''){
            clearInterval(interval);
            linkedinProfile = JSON.parse(profile);
            console.log(linkedinProfile);
            self.props.toogleLoader();
          }
        }, 500);
    setTimeout(this.toogleLoader.bind(this), 3000);
  }

  render(){
    return (
      <div className={classnames('myself')}>
        <div className={classnames('row')}>
          <div className={classnames('col-md-8','col-md-offset-2','col-xs-12','full-width')}>
            <div className={classnames('box')}>
              <Card>
                <CardMedia overlay={
                  <CardTitle title="JC Gomez" subtitle="Fullstack Javascript Developer" />
                }>
                  <img src={jcBanner} />
                </CardMedia>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Myself;
