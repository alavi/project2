import * as ReadableAPI from '../utils/api';
import { push } from 'react-router-redux'
//import fetch from 'isomorphic-fetch'

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_POST = 'GET_POST';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const VOTE_POST = 'VOTE_POST';
export const EDIT_POST = 'EDIT_POST';
export const GET_COMMENT = 'GET_COMMENT';
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const GET_POST_COMMENTS_COUNT = 'GET_POST_COMMENTS_COUNT'
export const SORT_POSTS_BY_DATE = 'SORT_POSTS_BY_DATE';
export const SORT_POSTS_BY_SCORE = 'SORT_POSTS_BY_SCORE';
export const IS_LOADING = 'ITEM_IS_LOADING';
export const HAS_ERROR = 'ITEM_HAS_ERROR';
export const FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';

export function deletePost(postId) {
  return (dispatch) => {
        ReadableAPI
            .deletePostById(postId)
            .then(post => {
                dispatch({
                    type: DELETE_POST,
                    post
                });
                dispatch(push('/'));
            })
    }
};

export function editPost(id, body) {
    return (dispatch) => {
        ReadableAPI
            .editPost(id, body)
            .then(post => {
                dispatch({
                    type: EDIT_POST,
                    post
                })
                dispatch({
                    type: GET_POST,
                    post
                })
                dispatch(push(`/posts/${id}`))
            })
    }
};

function fetchAllPosts(category) {
  console.log("inside fetchAllPosts")
  return dispatch => {
    dispatch(fetchPosts)}

};

export function fetchPost(id) {
    return (dispatch) => {
        ReadableAPI
            .fetchPost(id)
            .then(post => dispatch({
                type: GET_POST,
                post
            }))
    };
};

function shouldFetchPosts(state, category) {
  const posts = state.postsByCategory[category]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
};

export function fetchPostsIfNeeded(category) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), category)) {
      //return dispatch(fetchAllPosts(category))
      return dispatch(fetchPosts(category))
    }
  }
};

export function fetchPosts() {
    return (dispatch) => {
        ReadableAPI
            .getAllPosts()
            .then(posts => dispatch({
                type: GET_ALL_POSTS,
                posts
            }))
    }
};

export function getPostComments(postId) {
    console.log("inside getPostComments action. postId: ")
    console.log(postId)
    return (dispatch) => {
        ReadableAPI
            .fetchCommetsByPostId(postId)
            .then(comments => dispatch({
                type: GET_POST_COMMENTS,
                comments
            }))
    }
};

export function getComment(id) {
    return (dispatch) => {
        ReadableAPI
            .fetchComment(id)
            .then(comment => dispatch({
                type: GET_COMMENT,
                comment
            }))
    };
};

export function addComment(body) {
    return (dispatch) => {
        ReadableAPI
            .addComment(body)
            .then(comment => {
                dispatch({
                    type: ADD_COMMENT,
                    comment
                })
            })
    }
};

export function getCommentsCount(id) {
    return (dispatch) => {
        ReadableAPI
            .fetchPostCommentsCount(id)
            .then(commentsCount => dispatch({
                type: GET_POST_COMMENTS_COUNT,
                commentsCount,
                id
            }))
    }
};

export function deleteComment(id) {
    return (dispatch => {
        ReadableAPI
            .deleteCommentById(id)
            .then(comment => {
                dispatch({
                    type: DELETE_COMMENT,
                    comment
                })
            })
    })
};

export function editComment(id, body) {
    return (dispatch) => {
        ReadableAPI
            .editComment(id, body)
            .then(comment => {
                dispatch({
                    type: EDIT_COMMENT,
                    comment
                })
            })
    }
};

export function fetchCategories() {
  console.log("action: fetchCategories")
    return (dispatch) => {
        ReadableAPI
            .getAllCategories()
            .then(categories => dispatch({
                type: GET_CATEGORIES,
                categories
            }))
    };
};

export function sortPostsByDate(posts) {
    return {
        type: SORT_POSTS_BY_DATE,
        posts
    }
};
export function sortPostsByScore(posts) {
    return {
        type: SORT_POSTS_BY_SCORE,
        posts
    }
};

export function addPost(body) {
    return (dispatch) => {
        ReadableAPI
            .addPost(body)
            .then(post => {
                dispatch({
                    type: ADD_POST,
                    post
                });
                dispatch(push('/'));
            })
    }
};

export function votePost(id, vote) {
    let values = {};
    values["option"] = vote;
    return (dispatch) => {
        ReadableAPI
            .votePost(id, values)
            .then(post => {
                        dispatch({
                            type: VOTE_POST,
                            post
                        });

                })
            }
};

export function voteComment(id, option) {
  let values = {};
  values["option"] = option;
  console.log(id)
    return (dispatch) => {
        ReadableAPI
            .voteComment(id, values)
            .then(comment =>
                dispatch({
                type: VOTE_COMMENT,
                comment
            }))
    };
};
