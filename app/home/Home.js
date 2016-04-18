import React, {
  Component
} from 'react';
import classnames from 'classnames';
import mui from 'material-ui';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

const { AppBar, IconMenu, IconButton, MenuItem, LinearProgress } = mui;

const MENU_OPTS = [ 'Myself', 'Github', 'Blog', 'Plunker']

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      loaded : false
    }
  }

  toogleLoader(){
    let strategy = {
      true : false,
      false : true
    };

    this.setState({
      loaded : strategy[this.state.loaded.toString()]
    });
  }

  render(){
    return (
      <div className={classnames('home')}>
        <div className={classnames('row')}>
          <div className={classnames('col-xs-12', 'loading-bar', 'full-width', 'min-height', {'no-height':this.state.loaded})}>
            <div className={classnames('box')}>
              <LinearProgress mode="indeterminate" style={{backgroundColor:'#003399'}} />
            </div>
          </div>
        </div>
        <div className={classnames('row')}>
          <div className={classnames('col-xs')}>
            <div className={classnames('box')}>
              <AppBar
                className={classnames('app-bar')}
                title="@bartsis"
                iconElementLeft={
                  <IconMenu
                    iconButtonElement={
                      <IconButton><MoreVertIcon /></IconButton>
                    }
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                  >
                    {MENU_OPTS.map((opt)=>{
                      return (
                        <MenuItem primaryText={opt} />
                      );
                    })}
                  </IconMenu>
                }
              />
              {React.cloneElement(this.props.children, {toogleLoader : this.toogleLoader.bind(this)})}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
