import { connect } from 'react-redux';
import profile from './../profile';

const mapStateProfile = (state) => {
  return {
    profile : state.profile
  }
}

function ProfileContainer(React){
  return connect(
    mapStateProfile
  )(profile(React));
}

export default ProfileContainer;
