import { connect } from 'react-redux';
import ContactMe from './../contact-me';

const mapStateProfile = (state) => {
  return {
    profile : state.profile
  }
}

function ContactMeContainer(React){
  return connect(
    mapStateProfile
  )(ContactMe(React));
}

export default ContactMeContainer;
