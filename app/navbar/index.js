import classnames from 'classnames';
import * as types from './../actions';

import menu from './menu';
import searchMode from './search-mode';

function Navbar(React){
  const Menu = menu(React);
  const SearchMode = searchMode(React);

  const Wrapper = (props) => {
    console.log(props);

    return (
      <div className="navbar">
        <div className={classnames("menu", {active : props.navbar.menuOpen})}>
          <Menu {...props} />
        </div>
        <div className="row end-md end-xs navbar-actions">
          <div className="col-md-6 actions-wrapper col-xs-12">
            <div className={classnames("search-mode", {active : props.navbar.searchMode, 'menu-open' : props.navbar.menuOpen})}>
              <SearchMode {...props} />
            </div>
            <div className={classnames("menu-options",{'search-mode-active' : props.navbar.searchMode})}>
              <a className={classnames("menu-icon-open",{ active : !props.navbar.menuOpen })} onClick={openMenu}>
                <i className="fa fa-th-large" aria-hidden="true"></i>
              </a>
              <a className={classnames("menu-icon-close",{ active : props.navbar.menuOpen })} onClick={closeMenu}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );

    function openMenu(){
      props.dispatch(types.openMenu());
    }

    function closeMenu(){
      props.dispatch(types.closeMenu());
    }
  }

  return Wrapper;
}

export default Navbar;
