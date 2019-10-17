<<<<<<< HEAD
import {SET_ERRORS, POST_COMMENT, CLEAR_ERRORS, DELETE_POST, LOADING_UI, EDIT_COMMENT} from "../types";
=======
import {SET_ERRORS, POST_COMMENT, CLEAR_ERRORS, DELETE_COMMENT, LOADING_UI, EDIT_COMMENT, HIDE_COMMENT} from "../types";
>>>>>>> master
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
    .then(() => {dispatch(getPost(postId))})
    .catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}
<<<<<<< HEAD
export const editComment = (postId, commentId, body) => (dispatch) => {
    dispatch({type: LOADING_UI});
=======

export const hideComment = (postId, commentId) => (dispatch) => {
    axiosConfig.post(`/post/${postId}/comment/${commentId}/hide`) 
    .then(()=> {
      dispatch({
        type: HIDE_COMMENT,
        payload: postId
      })
    })
    .then(() => {dispatch(getPost(postId))})
    .catch(err => {
       console.log(err)
       })
  }

export const unhideComment = (postId, commentId) => (dispatch) => {
    axiosConfig.post(`/post/${postId}/comment/${commentId}/unhide`) 
    .then(() => {
      dispatch({
        type: HIDE_COMMENT,
        payload: postId
      })
    })
    .then(() => {dispatch(getPost(postId))})
    .catch(err => {
       console.log(err)
       })
  }

export const editComment = (postId, commentId, body) => (dispatch) => {
>>>>>>> master
    axiosConfig.post(`/post/${postId}/comment/${commentId}/edit`, body)
    .then(res => {
        dispatch({
          type: EDIT_COMMENT,
          payload: res.data
        })
        dispatch({type: CLEAR_ERRORS})
    })  
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    })
    .then(() => {dispatch(getPost(postId))})
}
export const deleteComment = (postId, commentId) => (dispatch) => {
    axiosConfig.delete(`/post/${postId}/comment/${commentId}`)
    .then(() => {
            dispatch({
<<<<<<< HEAD
                type: DELETE_POST, 
=======
                type: DELETE_COMMENT, 
>>>>>>> master
                payload: postId,
                comment: commentId
            });
            })
            .then(() => {dispatch(getPost(postId))})
            .catch((err) => console.log(err));
        
    }

