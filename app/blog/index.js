import classnames from 'classnames';

import * as types from './../actions';
import assetStrategy from './asset-strategy';

function Blog(React){
  const Wrapper = (props) => {
    console.log(props);
    if(props.blog.items.length === 0 && !props.blog.error) props.dispatch(types.getPosts())
    else{
      console.log(props.blog);
    }
    return (
      <div className="blog">
        <div className="posts">
          {props.blog.items.map(_renderPosts)}
        </div>
      </div>
    )
  }

  function _renderPosts(post, i){
    console.log(post)
    return (
      <a href={post.url} key={'post-' + post.type + '-' + i}>
        <div className="post">
          <div className="post-image">
            <img src={assetStrategy[post.labels[0].toLowerCase()]} />
          </div>
          <div className="post-info">
            <div className="post-info-main">
              <h3>{post.title}</h3>
              <small>{post.date}</small>
            </div>
            <div className="post-info-logo">
              <i className={classnames('fa',post.icon)} aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </a>
    );
  }

  return Wrapper;
}

export default Blog;
