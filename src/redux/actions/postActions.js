import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  POST_POST,
  LOADING_DATA,
  GET_POSTS
} from "../types";
import axiosConfig from '../../axiosConfig';
export const getAllPosts = () => (dispatch) => {
  dispatch({type: LOADING_DATA});
  axiosConfig.get('/getAllPosts')
  .then((res) => {
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

export const post = (newPost) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axiosConfig.post('/post', newPost)
    .then(res => {
      dispatch({
        type: POST_POST,
        payload: res.data 
      });
      dispatch({type: CLEAR_ERRORS});
    })
    .then(() => {dispatch(getAllPosts())})
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    })
    
}