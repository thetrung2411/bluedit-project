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


  export const getSubscribe = () => dispatch => {
    axiosConfig
      .get("/allSubscribe")
      .then(res => {
      })
      .catch(err => console.log(err));
  };