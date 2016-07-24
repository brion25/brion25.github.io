function Menu(React){
  const Wrapper = (props) => {
    console.log(props);
    const self = this;

    return (
      <div className="row end-md end-xs menu">
        <div className="col-md-6 actions-wrapper col-xs-12">
          <i className="fa fa-search search-icon" aria-hidden="true"></i>
          <input type="text" placeholder="Search" className="search-input"/>
          <a className="icon">
            <i className="fa fa-th-large" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }

  return Wrapper;
}

export default Menu;
