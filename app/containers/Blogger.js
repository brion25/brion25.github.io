import { connect } from 'react-redux';
import Blogger from './../blogger';

const mapStateBlogger = (state) => {
  return {
    blogger : state.blogger
  }
}

function BloggerContainer(React){
  return connect(
    mapStateBlogger
  )(Blogger(React));
}

export default BloggerContainer;
