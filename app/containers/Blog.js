import { connect } from 'react-redux';
import Blog from './../blog';

const mapStateBlog = (state) => {
  return {
    blog : state.blog
  }
}

function BlogContainer(React){
  return connect(
    mapStateBlog
  )(Blog(React));
}

export default BlogContainer;
