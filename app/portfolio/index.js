import profile from './../common/profiles/profile.json';

function Portfolio(React){
  const PortfolioCmp = (props) => {
    return (
      <div className="portfolio">
        <div>
          <h2 className="page-name">{props.route.name}</h2>
        </div>
        <div className="portfolio-items">
          {profile.portfolio.map(_renderPortfolio)}
        </div>
      </div>
    );
  }

  function _renderPortfolio(item, i){
    return (
      <a key={`portfolio-item-${i}`} className="portfolio-item" href={item.url} target="_blank">
        <div className="portfolio-item-img">
          <img src={require(`./assets/${item.id}.png`)} />
        </div>
        <div className="portfolio-item-info">
          <div className="portfolio-item-type">
            <i className={`fa fa-${item.type}`} aria-hidden="true"></i>
          </div>
          <span>{item.name}</span>
        </div>
      </a>
    );
  }

  return PortfolioCmp;
}

export default Portfolio;
