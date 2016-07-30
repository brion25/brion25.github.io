import { Link } from 'react-router';
import contactMe from './../../containers/ContactMe';
import navbar from './../../containers/Navbar';

function App(React){
  const ContactMe = contactMe(React);
  const Navbar = navbar(React);

  const Wrapper = (props) => {
    return (
      <section>
        <ContactMe />
        <div className="app">
          <Navbar />
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
