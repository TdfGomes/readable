import * as readAPI from '../utils/api'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const GETALLCOMMENTS = 'GETALLCOMMENTS'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_VOTE = 'UPDATE_VOTE'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const GETALL = 'GETALL'


export function addComment({ id, timestamp, title, body, author, voteScore, parentDeleted, deleted }) {
  return {
    type: ADD_COMMENT,
    id,
    timestamp,
    title,
    body,
    author,
    voteScore,
    parentDeleted,
    deleted
  }
}

export function deleteComment({ id }) {
  return {
    type: DELETE_COMMENT,
    id

  }
}

export function addPost(newPost) {
  return {
    type: ADD_POST,
    newPost
  }
}

export function deletePost({ id }) {
  return {
    type: DELETE_POST,
    id

  }
}

export function updateVote({ id }) {
  return {
    type: UPDATE_VOTE,
    id

  }
}

export function selectCategory(category) {
  return function (dispatch) {
    console.log(category)
    readAPI.getCategory(category).then(
      post => dispatch(receivePosts(post)),
      error => console.log('An error occured', error)
    )
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(post) {
  return {
    type: RECEIVE_POSTS,
    post
  }
}

export function getall() {
  return function (dispatch) {
    readAPI.getAll()
      .then(
      post => dispatch(receivePosts(post)),
      error => console.log('An error occured', error)
      )
  }

}

export function getAllComments(id) {
  return function (dispatch) {
    readAPI.getComments(id)
    .then(
      comment => dispatch(receiveComments(comment)),
      error => console.log('An error occured', error)
    )
  }
}

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
function receiveComments(comment) {
  return {
    type: RECEIVE_COMMENTS,
    comment
  }
}

