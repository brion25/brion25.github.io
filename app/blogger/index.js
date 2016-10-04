import classnames from 'classnames';

import * as types from './../actions';
import assetStrategy from './asset-strategy';

function Blog(React){
  const Wrapper = (props) => {
    let author = {};
    if(props.blogger.items.length === 0 && !props.blogger.error) props.dispatch(types.getBloggerPosts());
    if(!props.blogger.profile.name && !props.blogger.error) props.dispatch(types.getBloggerProfile());
    return (
      <div className="blog row">
        <div className="posts-wrapper col-md-12 col-xs-12">
          <div>
            <h2 className="page-name">{props.route.name}</h2>
          </div>
          <div className="posts">
            {props.blogger.items.map(_renderPosts)}
          </div>
        </div>
      </div>
    )
  }

  function _renderPosts(post, i){
    return (
      <a target="_blank" href={post.url} key={'post-' + post.type + '-' + i}>
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
