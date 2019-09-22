import {SET_ERRORS, POST_COMMENT, CLEAR_ERRORS, DELETE_POST} from "../types";
import axiosConfig from "../../axiosConfig";
import {getPost} from "./postActions";
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

export const deleteComment = (postId, commentId) => (dispatch) => {
    axiosConfig.delete(`/post/${postId}/comment/${commentId}`)
    .then(() => {
            dispatch({
                type: DELETE_POST, 
                payload: postId,
                comment: commentId
            });
            })
            .then(() => {dispatch(getPost(postId))})
            .catch((err) => console.log(err));
        
    }

