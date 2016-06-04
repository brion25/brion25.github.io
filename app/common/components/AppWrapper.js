import React, {
  Component
} from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

const MENU_OPTS = [
  {
    label : 'Twitter',
    icon : 'fa-twitter',
    tooltip : 'See my Profile',
    link : 'twitter'
  }
];

class AppWrapper extends Component{
  constructor(props){
    super(props);
    this.state = {
      menuOpen : false,
      loading : true
    }
  }

  toogleMenu(){
    this.setState({
      menuOpen : !this.state.menuOpen
    });
  }

  toogleLoading(){
    let self = this;
    setTimeout(function () {
      self.setState({
        loading : !self.state.loading
      });
    }, 250);
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
              <Link to={opt.link} onClick={this.toogleMenu.bind(this)}>
                <div key={`opt-${index}`} className={classnames('opt')}>
                  <div className={classnames('icon')}>
                    <i className={classnames('fa', opt.icon)} ariaHidden={true}></i>
                  </div>
                  <h3>{opt.label}</h3>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={classnames('loader', {hide : !this.state.loading})}>
          <span className={classnames('square')}></span>
          <span className={classnames('square')}></span>
          <span className={classnames('square')}></span>
          <span className={classnames('square')}></span>
        </div>
        <section className={classnames('full-size',{'blur-me' : this.state.menuOpen || this.state.loading})}>
          {React.cloneElement(this.props.children, {
            toogleLoading : this.toogleLoading.bind(this)
          })}
        </section>
      </section>
    );
  }
}

export default AppWrapper;
