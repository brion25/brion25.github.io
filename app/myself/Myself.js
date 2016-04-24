import React, {
  Component
} from 'react';
import ContactsIcon from 'material-ui/lib/svg-icons/communication/contacts';
import InfoIcon from 'material-ui/lib/svg-icons/action/info';
import mui from 'material-ui';
import classnames from 'classnames';
import moment from 'moment';

import jcBanner from './../assets/images/banner.jpg';
import equallity from './../assets/images/e-quallity.jpg';
import neyper from './../assets/images/neyper.jpg';
import ustglobal from './../assets/images/ust-global.jpg';
import accenture from './../assets/images/accenture.jpg';

const {
  Card,
  CardText,
  CardHeader,
  Avatar,
  CardMedia,
  GridList,
  GridTile,
  IconButton,
  Dialog,
  FlatButton
} = mui;

let linkedinProfile = null;

class Myself extends Component{
  constructor(props){
    super(props);
    this.state = {
      profile : null,
      images : {
        'accenture' : accenture,
        'e-quallity' : equallity,
        'neyper' : neyper,
        'ust global' : ustglobal
      },
      dialog : {
        open : false
      }
    }
  }

  componentDidMount(){
    let self = this,
        interval = setInterval(() => {
          let profile = window.localStorage.getItem('linkedinProfile');
          if(profile !== ''){
            clearInterval(interval);
            linkedinProfile = JSON.parse(profile);
            self.setState({
              profile : linkedinProfile
            });
            console.log(linkedinProfile);
            self.props.toogleLoader();
          }
        }, 500);
  }

  render(){
    const dialogActions = [
      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.closeDialog.bind(this)}
        />
    ];

    return (
      <div className={classnames('myself')}>
        <div className={classnames('row')}>
          <div className={classnames('col-md-12','col-xs-12','full-width')}>
            <div className={classnames('box')}>
              {(this.state.profile) ? this.renderProfile.call(this) : ''}
            </div>
          </div>
        </div>
        <Dialog
          title={
            <CardHeader
              title={this.state.dialog.title}
              subtitle={this.state.dialog.subtitle}
              avatar={
                <Avatar
                  icon={<ContactsIcon />}
                />
              }
              />
          }
          actions={dialogActions}
          open={this.state.dialog.open}
          onRequestClose={this.closeDialog.bind(this)}
          bodyStyle={{overflow:'auto'}}
        >
          {this.props.renderLines(this.state.dialog.content)}
          <img className={classnames('full-width')} src={this.state.images[this.state.dialog.name]} />
        </Dialog>
      </div>
    );
  }

  renderProfile(){
    return (
      <div>
        <Card className={classnames('my-card')}>
          <CardHeader
            title={this.state.profile.formattedName}
            subtitle={this.state.profile.headline}
            avatar={this.state.profile.pictureUrls.values[0]}
            />
          <CardText>
            {this.state.profile.summary}
          </CardText>
        </Card>
        <Card className={classnames('my-card')}>
          <CardHeader
            title="I worked at..."
            avatar={
              <Avatar
                icon={<ContactsIcon />}
                />
            }
            />
          <CardMedia>
            <GridList
              cellHeight={250}
              className={classnames('around-xs','center-xs')}
            >
              {this.state.profile.positions.values.map( position => {
                return (
                  <GridTile
                    title={position.title}
                    subtitle={position.company.name}
                    actionIcon={
                      <IconButton onTouchTap={this.openDialog.bind(this,position)}><InfoIcon color='white' /></IconButton>
                    }
                  >
                    <img src={this.state.images[position.company.name.toLowerCase()]} />
                  </GridTile>
                );
              })}
            </GridList>
          </CardMedia>
        </Card>
      </div>
    );
  }

  openDialog(position){
    let start = moment(position.startDate).format('MMMM YYYY'),
        end = (position.isCurrent) ? 'Present' : moment(position.endDate).format('MMMM YYYY');

    console.log(start);

    this.setState({
      dialog : {
        open : true,
        title : `I worked as ${position.title}`,
        subtitle : `At ${position.company.name} from ${start} to ${end}`,
        content : position.summary,
        name : position.company.name.toLowerCase()
      }
    })
  }

  closeDialog(){
    this.setState({
      dialog : {
        open : false
      }
    });
  }
}

export default Myself;
