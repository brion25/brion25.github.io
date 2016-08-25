import fetch from './../common/libraries/fetch';
import * as types from './ActionTypes';

function bloggerPromise(){
  return fetch(`https://www.googleapis.com/blogger/v2/blogs/${process.env.BLOGGER_ID}/posts?key=${process.env.GOOGLE_KEY}`)
}

function getPosts(blogger){
  let posts = blogger.items.map(post => {
    return {
      type : 'blogger',
      labels : post.labels || ['nolabel'],
      replies : post.replies.totalItems,
      url : post.url,
      title : post.title,
      date : post.updated || post.published,
      icon : 'fa-rss'
    }
  });
  return {
    type : types.GET_POSTS,
    posts
  }
}

function postsError(error){
  return {
    type : types.GET_POSTS,
    posts : [],
    error
  }
}

export default function getBloggerPosts(){
  return function(dispatch){
    return bloggerPromise().then(
      blogger => dispatch(getPosts(blogger)),
      error => dispatch(postsError(error))
    );
  }
};
