import moment from 'moment';
import fetch from './../common/libraries/fetch';
import * as types from './ActionTypes';

function blogPromise(){
  return fetch(`https://www.googleapis.com/blogger/v2/blogs/${process.env.BLOGGER_ID}/posts?key=${process.env.GOOGLE_KEY}`);
}

function getPosts(blogger){
  let posts = blogger.items.map(post => {
        return {
          type : 'blogger',
          labels : post.labels || ['nolabel'],
          replies : post.replies.totalItems,
          url : post.url,
          title : post.title,
          date : post.updated ? moment(post.updated).fromNow() : moment(post.published).fromNow(),
          icon : 'fa-rss'
        }
      }),
      author = blogger.items[0] ? blogger.items[0].author : {};

  return {
    type : types.GET_BLOGGER_POSTS,
    posts,
    author
  }
}

function postsError(error){
  return {
    type : types.GET_BLOGGER_POSTS,
    posts : [],
    error
  }
}

export default function getBlogPosts(){
  return function(dispatch){
    return blogPromise().then(
      blogger => dispatch(getPosts(blogger)),
      error => dispatch(postsError(error))
    );
  }
};
