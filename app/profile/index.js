import { connect } from 'react-redux';

export default Profile;

function Profile(React){
  const ProfileCmp =  (props) => {
    let profile = props.profile.rawProfile;
    return (
      <div>{profile.name}</div>
    );
  }

  return connect()(ProfileCmp);
}
