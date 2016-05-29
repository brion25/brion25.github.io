import React, {
  Component
} from 'react';
import classnames from 'classnames';

const MENU_OPTS = [
  {
    label : 'Profile',
    icon : 'fa-user',
    tooltip : 'See my Profile'
  },
  {
    label : 'Github',
    icon : 'fa-github',
    tooltip : 'See my Profile'
  }
];

class AppWrapper extends Component{
  constructor(props){
    super(props);
    this.state = {
      menuOpen : false
    }
  }

  toogleMenu(){
    this.setState({
      menuOpen : !this.state.menuOpen
    });
  }

  render(){
    return(
      <section>
        <div onClick={this.toogleMenu.bind(this)} className={classnames('menu-icon', { open : this.state.menuOpen })}>
          <span className={classnames('bar', { 'rotate-left' : this.state.menuOpen })}></span>
          <span className={classnames('bar', { disappear : this.state.menuOpen })}></span>
          <span className={classnames('bar', { 'rotate-right' : this.state.menuOpen })}></span>
        </div>
        <div className={classnames('menu-opts', { open : this.state.menuOpen })}>
          {MENU_OPTS.map((opt, index) => {
            return (
              <div key={`opt-${index}`} className={classnames('opt')}>
                <div className={classnames('icon')}>
                  <i className={classnames('fa', opt.icon)} ariaHidden={true}></i>
                </div>
                <h3>{opt.label}</h3>
              </div>
            );
          })}
        </div>
        <section className={classnames('full-size',{'blur-me' : this.state.menuOpen})}></section>
      </section>
    );
  }
}

export default AppWrapper;
