import {SET_ERRORS, POST_COMMENT, CLEAR_ERRORS} from "../types";
import axiosConfig from "../../axiosConfig";

export const postComment = (postId, commentBody) => (dispatch) => {
    axiosConfig.post(`/post/${postId}/comment`, commentBody)
    .then(res => {
        dispatch ({
            type: POST_COMMENT,
            payload: res.data
        });
        dispatch({type:CLEAR_ERRORS})
    })
    .catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}