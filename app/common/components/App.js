import { Link } from 'react-router';
import contactMe from './../../containers/ContactMe';
import menu from './../../containers/Menu';

function App(React){
  const ContactMe = contactMe(React);
  const Menu = menu(React);

  const Wrapper = (props) => {
    return (
      <section>
        <ContactMe />
        <div className="app">
          <Menu />
          <div className="row">
            <div className="col-xs-12 col-md-10 col-md-offset-1 content">
              {props.children}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return Wrapper;
}

export default App;
