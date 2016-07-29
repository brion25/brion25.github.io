import classnames from 'classnames';
import * as types from './../actions';

function Menu(React){
  const Wrapper = (props) => {
    console.log(props);
    const self = this;

    return (
      <div className="row end-md end-xs menu">
        <div className="col-md-6 actions-wrapper col-xs-12">
          <div className={classnames("search-mode", {active : props.menu.searchMode})}>
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
          <a className="icon">
            <i className="fa fa-th-large" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );

    function openSearchMode(){
      props.dispatch(types.enableSearchMode());
    }

    function closeSearchMode(){
      props.dispatch(types.disableSearchMode());
    }
  }

  return Wrapper;
}

export default Menu;
