import { connect } from 'react-redux';
import Navbar from './../navbar';

const mapStateNavbar = (state) => {
  return {
    navbar : state.navbar
  }
}

function NavbarContainer(React){
  return connect(
    mapStateNavbar
  )(Navbar(React));
}

export default NavbarContainer;
