import classnames from 'classnames';

import * as types from './../actions';
import assetStrategy from './asset-strategy';

function Blog(React){
  const Wrapper = (props) => {
    let author = {};
    if(props.blogger.items.length === 0 && !props.blogger.error) props.dispatch(types.getBloggerPosts());
    if(!props.blogger.profile.name && !props.blogger.error) props.dispatch(types.getBloggerProfile());
    else console.log(props.blogger)
    return (
      <div className="blog row">
        <div className="blog-description col-md-4 col-xs-12">
          <div className="blog-info">
            <a target="_blank" href={props.blogger.profile.url}>
              <h2 className="blog-info-header">{props.blogger.profile.name}</h2>
            </a>
            <div>
              <small className="blog-info-date">{props.blogger.profile.published}</small>
            </div>
            <p className="blog-info-summary">{props.blogger.profile.description}</p>
            <div  className="blog-info-posts-count">
              <span> I wrote </span>
              <b>{props.blogger.profile.posts ? props.blogger.profile.posts.totalItems : 0} </b>
              <span> posts</span>
            </div>
          </div>
          <div className="blog-author">
            <a target="_blank" href={props.blogger.author.url}>
              <div className="blog-author-description">
                <img src={props.blogger.author.image ? props.blogger.author.image.url : null} />
                <div className="blog-author-description-name">
                    <h2>{props.blogger.author.displayName}</h2>
                  <small>Author</small>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="posts-wrapper col-md-8 col-xs-12">
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
