import axios from 'axios'
const POSTS = 'POSTS'
const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'
const DELETE_POST =  'DELETE_POST'

export const getPosts = (setLoaded) => {
  return (dispatch) => {
    axios.get('api/posts')
      .then( res => {
        dispatch({ type: POSTS, posts: res.data })
        setLoaded()
      })
  }
}

export const addPost = () => {

}

export const updatePost = (id) => {

}

export const deletePost = (id) => {

}

export default (state = [], action) => {
  switch(action.type) {
    case POSTS:
      return action.posts
    case ADD_POST:
    case UPDATE_POST:
    case DELETE_POST:
    default: 
      return state
  }
}