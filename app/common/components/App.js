import { Link } from 'react-router';
import contactMe from './../../containers/ContactMe';
import menu from './../../menu';

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
            <div className="col-md-6 col-md-offset-3">
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
