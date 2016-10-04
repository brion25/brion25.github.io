function ContactMe(React){
  const Wrapper = (props) => {
    const self = this;
    const profile = props.profile.rawProfile;

    return (
      <div className="contact-me">
        <div className="logo">
        </div>
        <div className="contact-items">
          {Object.keys(profile.contact).map(_renderContact.bind(self,profile.contact))}
        </div>
      </div>
    );
  }

  function _renderContact(_contacts,contact, i){

    switch(contact){
      case 'email':
        return (
          <a key={"contact-"+i} href={"mailto://" + _contacts[contact]}>
            <div className="contact-item">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </div>
          </a>
        );
      case 'npm':
        return (
          <a key={"contact-"+i} href={_contacts[contact]} target="_blank">
            <div className="contact-item">
              <i className="fa fa-github-alt" aria-hidden="true"></i>
            </div>
          </a>
        );
      default:
        return (
          <a key={"contact-"+i} href={_contacts[contact]} target="_blank">
            <div className={"contact-item contact-item-" + contact}>
              <i className={"fa fa-" + contact} aria-hidden="true"></i>
            </div>
          </a>
        );
    }
  }

  return Wrapper;
}

export default ContactMe;
