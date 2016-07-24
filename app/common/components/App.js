import { Link } from 'react-router';
import contactMe from './../../containers/ContactMe';

function App(React){
  const ContactMe = contactMe(React);
  
  const Wrapper = (props) => {
    return (
      <section>
        <ContactMe />
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            {props.children}
          </div>
        </div>
      </section>
    );
  }

  return Wrapper;
}

export default App;
