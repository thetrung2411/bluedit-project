import { SET_ERRORS, POST_BOOKMARK, CLEAR_ERRORS } from "../types";
import axiosConfig from "../../axiosConfig";

export const postBookmark = (postId, userPosted) => dispatch => {
  axiosConfig
    .post(`/post/${postId}/bookmark`, userPosted)
    .then(res => {
      dispatch({
        type: POST_BOOKMARK,
        payload: res.data
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};
