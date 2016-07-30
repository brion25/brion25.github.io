import {Link} from 'react-router';

import menuOptions from './menu-options.json';

function Menu (React){
  const Wrapper = (props) => {
    return (
      <div className="menu-options">
        {menuOptions.map(_renderMenuOptions)}
      </div>
    );

    function _renderMenuOptions(option){
      switch(option.link.type){
        case 'inner':
          return (
            <div key={option.id} className="menu-option">
              <Link to={option.link.url}>
                {_formatOption(option)}
              </Link>
            </div>
          );
        case 'outer':
          return (
            <div key={option.id} className="menu-option">
              <a href={option.link.url} target="_blank">
                {_formatOption(option)}
              </a>
            </div>
          );
      }
    }

    function _formatOption(option){
      return (
        <div>
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
  }

  return Wrapper;
}

export default Menu;
