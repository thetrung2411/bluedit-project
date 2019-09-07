import {
    GET_POSTS,
    POST_POST,
    LOADING_DATA
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
        case GET_POSTS:
            return{
                ...state,
                posts: action.payload,
                loading: false
            };
        case POST_POST:
            return{
                ...state,
                posts: [
                    action.payload,
                    ...state.posts
                ]
            }
        default:
            return state;
}
}