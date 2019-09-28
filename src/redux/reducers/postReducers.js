import {
    GET_POSTS,
    POST_POST,
    LOADING_DATA,
    POST_COMMENT,
    POST_BOOKMARK,
    DELETE_COMMENT,
    EDIT_COMMENT,
    GET_POST,
    DELETE_POST,
    EDIT_POST,
    HIDE_POST
} from "../types"

const initialState = {
    posts: [],
    post: {},
    loading: false
};

export default function (state = initialState, action){
    switch(action.type){
        case LOADING_DATA:
            return{
                ...state,
                loading: true
            };
        case DELETE_POST:
            let index = state.posts.findIndex(
                    (post) => post.postId === action.payload.postId
                );
            state.posts.splice(index, 1);
            return{
                ...state,
            }
        case HIDE_POST: 
        return{   
            ...state,
            posts: [
                action.payload,
                ...state.posts
            ]
        }
        case GET_POSTS:
            return{
                ...state,
                posts: action.payload,
                loading: false
            };
        case GET_POST:
            return{
                ...state,
                post: action.payload
            };
        case POST_POST:
            return{
                ...state,
                posts: [
                    action.payload,
                    ...state.posts
                ]
            }
        case EDIT_POST:
            return{
                ...state,
                posts: [
                    action.payload,
                    ...state.posts
                ]
            }
        case POST_COMMENT:
            return{
                ...state,
                post:{
                    ...state.post,
                    comments: [action.payload, ...state.post.comments]
                }
            }
        case DELETE_COMMENT:
            index = state.posts.post.comments.findIndex(
                (comment) => comment.commentId === action.commentId && comment.postId === action.payload
            )
            state.posts.post.comments.splice(index,1)
            return{
                ...state
            }
        case EDIT_COMMENT:
                return{
                    ...state,
                    post:{
                        ...state.post,
                        comments: [action.payload, ...state.post.comments]
                    }
                } 
        case POST_BOOKMARK:
                return{
                    ...state,
                    post:{
                        ...state.post,
                        bookmarks: [action.payload, ...state.post.bookmarks]
                    }
                }
        default:
            return state;
}
}