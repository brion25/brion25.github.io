import classnames from 'classnames';
import * as types from './../actions';

function Navbar(React){
  const Wrapper = (props) => {
    console.log(props);
    const self = this;

    return (
      <div className="navbar">
        <div className={classnames("menu", {active : props.navbar.menuOpen})}>
          This will be the Menu :D
        </div>
        <div className="row end-md end-xs navbar-actions">
          <div className="col-md-6 actions-wrapper col-xs-12">
            <div className={classnames("search-mode", {active : props.navbar.searchMode, 'menu-open' : props.navbar.menuOpen})}>
              <div className="search-mode-actions">
                <div onClick={openSearchMode} className="search-mode-search-text">
                  <i className="fa fa-search search-icon" aria-hidden="true"></i>
                  <div>
                    <span>
                      Search
                    </span>
                    <input type="text" placeholder="Search" />
                  </div>
                </div>
                <div className="search-mode-close" onClick={closeSearchMode}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </div>
              </div>
              <div className="search-mode-content">
                Comming Soon!
              </div>
            </div>
            <div className="menu-options">
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

    function openSearchMode(){
      props.dispatch(types.enableSearchMode());
    }

    function closeSearchMode(){
      props.dispatch(types.disableSearchMode());
    }
  }

  return Wrapper;
}

export default Navbar;
