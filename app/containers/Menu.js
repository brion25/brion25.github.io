import { connect } from 'react-redux';
import Menu from './../menu';

const mapStateMenu = (state) => {
  return {
    menu : state.menu
  }
}

function MenuContainer(React){
  return connect(
    mapStateMenu
  )(Menu(React));
}

export default MenuContainer;
