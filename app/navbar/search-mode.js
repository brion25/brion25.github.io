import * as types from './../actions';

function SearchMode(React){
  const Wrapper = (props) => {
    return (
      <div className="wrapper">
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

export default SearchMode;
