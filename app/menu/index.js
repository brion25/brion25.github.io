import classnames from 'classnames';
import * as types from './../actions';

function Menu(React){
  const Wrapper = (props) => {
    console.log(props);
    const self = this;

    return (
      <div className="row end-md end-xs menu">
        <div className="col-md-6 actions-wrapper col-xs-12">
          <div onClick={toogleSearchMode} className={classnames("search-mode", {active : props.menu.searchMode})}>
            <i className="fa fa-search search-icon" aria-hidden="true"></i>
            Search
          </div>
          <a className="icon">
            <i className="fa fa-th-large" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );

    function toogleSearchMode(){
      props.dispatch(types.enableSearchMode());
    }
  }

  return Wrapper;
}

export default Menu;
