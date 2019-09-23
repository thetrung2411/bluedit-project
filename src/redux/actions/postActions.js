import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  POST_POST,
  LOADING_DATA,
  GET_POSTS,
  GET_POST
} from "../types";
import axiosConfig from '../../axiosConfig';
export const getAllPosts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axiosConfig.get('/getAllPosts')
    .then((res) => {
      console.log(res)
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_POSTS,
        payload: []
      });
    });
};

export const getPost = (postId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axiosConfig.get(`/post/${postId}`)
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: res.data
      });
      dispatch({ type: STOP_LOADING_UI })
    })
    .catch(err => console.log(err));

}

export const post = (newPost) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axiosConfig.post('/post', newPost)
    .then(res => {
      dispatch({
        type: POST_POST,
        payload: res.data
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .then(() => { dispatch(getAllPosts()) })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    })

}

export const SearchPost = (body, name) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  var sql = (body && name) ?
    `body=${body}&fbname=${name}` :
    (name) ? `fbname=${name}` :
      (body) ? `body=${body}` : '';
  console.log('sql', sql)
  console.log('body', body)
  axiosConfig.get(`/searchPost?${sql}`)
    .then(res => {
      console.log('ser,', res)
      dispatch({
        type: GET_POST,
        payload: res.data
      });
      dispatch({ type: STOP_LOADING_UI })
    })
    .catch(err => console.log(err));

}

export const BlackPost = (bname) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axiosConfig.get(`/blackuser?bname=${bname}`)
    .then(res => {
      console.log('ser,', res)
      dispatch({
        type: GET_POST,
        payload: res.data
      });
      dispatch({ type: STOP_LOADING_UI })
    })
    .catch(err => console.log(err));

}