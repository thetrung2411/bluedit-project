import React from 'react';
import {shallow} from 'enzyme';
import Searching from  './searching';
import Search from './search';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import postReducers from "../../redux/reducers/postReducers";
import * as types from "../../redux/types";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe('Search page Component test', () => {
    test('Should render without errors', () => {
        const component = shallow (<Provider store ={store}><Searching/></Provider>);
        expect(component.find(Searching).length).toBe(1);
    })
})

describe('Search Component Test', () => {
    
    test('Should render without errors', () => {
        const component = shallow (<Provider store ={store}><Search/></Provider>);
        expect(component.find(Search).length).toBe(1);
    })
    test('Should return initial state', () => {
        expect(postReducers(undefined, {})).toEqual(
            {
                    posts: [],
                    post: {},
                    loading: false,
                    unSubscribes: [],
                    subscribes: []
            }
        )
    })
    test('Should return GET_POSTS state', () => {
        expect(postReducers({},{
            type: types.GET_POSTS,     
        })).toEqual({
            posts: undefined,
            loading: false,
            unSubscribes: undefined,
            subscribes: undefined
        })
    })
    test('Should return GET_POST state', () => {
        expect(postReducers({},{
            type: types.GET_POST,     
        })).toEqual({
            post: undefined,
        })
    })
    test('Should return POST_POST state', () => {
        expect(postReducers(undefined,{
            type: types.POST_POST,     
        })).toEqual({
                posts: [undefined],
                post: {},
                loading: false,
                unSubscribes: [],
                subscribes: []
        })
    })
})