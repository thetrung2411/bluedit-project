import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  POST_POST
} from "../types";
import axios from 'axios';
import axiosConfig from '../../axiosConfig';
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
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    })
}