import {Link} from 'react-router';

import * as types from './../actions';
import menuOptions from './menu-options.json';
import profile from './../common/profiles/profile.json';

function Menu (React){
  const Wrapper = (props) => {
    let menuLinks = menuOptions.concat(profile.externalProfiles.map((profile) => {
      return {
        id : profile.name.toLowerCase(),
        label : profile.name,
        fa : `fa-${profile.name.toLowerCase() !== 'npm' ? profile.name.toLowerCase() : 'th-large'}`,
        tooltip : `See my profile on ${profile.name}`,
        link : {
          type : 'outer',
          url : profile.url
        }
      }
    }))
    return (
      <div className="menu-options">
        {menuLinks.map(_renderMenuOptions)}
      </div>
    );

    function _renderMenuOptions(option){
      switch(option.link.type){
        case 'inner':
          return (
            <div key={option.id} onClick={closeMenu} className={`menu-option ${option.link.type}`}>
              <Link to={option.link.url}>
                {_formatOption(option)}
              </Link>
            </div>
          );
        case 'outer':
          return (
            <div key={option.id} onClick={closeMenu} className={`menu-option ${option.link.type}`}>
              <a href={option.link.url} target="_blank">
                {_formatOption(option)}
              </a>
            </div>
          );
      }
    }

    function _formatOption(option){
      return (
        <div className="menu-option-tooltip-wrapper">
          <div className="menu-option-tooltip">
            {option.tooltip}
          </div>
          <div className="menu-option-content">
            <div className="icon">
              <i className={"fa " + option.fa} aria-hidden="true"></i>
            </div>
            <div className="label">
              <h3>{option.label}</h3>
            </div>
          </div>
        </div>
      );
    }

    function closeMenu(){
      props.dispatch(types.closeMenu());
    }
  }

  return Wrapper;
}

export default Menu;
