import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import contactMe from './../../containers/ContactMe';
import navbar from './../../containers/Navbar';

function App(React){
  const ContactMe = contactMe(React);
  const Navbar = navbar(React);
  const ANIMATION_TIMMING = 500;

  const Wrapper = (props) => {
    return (
      <section>
        <ContactMe />
        <div className="app">
          <Navbar />
          <div className="row">
            <div className="col-xs-12 col-md-12 content">
              <ReactCSSTransitionGroup
                component="div"
                transitionName="page-transition"
                transitionEnterTimeout={ANIMATION_TIMMING}
                transitionLeaveTimeout={ANIMATION_TIMMING}
              >
                {React.cloneElement(props.children,{
                  key : location.pathname + location.hash
                })}
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return Wrapper;
}

export default App;
