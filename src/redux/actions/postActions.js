import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  POST_POST
} from "../types";
import axios from 'axios';
export const post = (newPost) => (dispatch) => {
    dispatch({type: LOADING_UI});

}