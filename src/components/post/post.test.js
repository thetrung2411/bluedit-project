import React from 'react';
import {shallow} from 'enzyme';
import PostButton from './PostButton';
import PostItemDetail from './PostItemDetail';
import PostItems from './PostItems';
import PostLayout from './PostLayout';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import postReducers from "../../redux/reducers/postReducers";
import * as types from "../../redux/types";
import thunk from "redux-thunk";
import PostMenu from "./PostMenu";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import HideButton from "./HideButton";
const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe('PostButton Component Test', () => {
    test('Should render without errors', () => {
        const component = shallow(<Provider store ={store}><PostButton/></Provider>);
        expect(component.find(PostButton).length).toBe(1);
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
describe('PostItemDetail Component Test', () => {
    test('Should render without errors', () => {
        const component = shallow(<Provider store ={store}><PostItemDetail/></Provider>);
        expect(component.find(PostItemDetail).length).toBe(1);
    })
})

describe('PostItems Component Test', () => {
    test('Should render without errors', () => {
        const component = shallow(<Provider store ={store}><PostItems/></Provider>);
        expect(component.find(PostItems).length).toBe(1);
    })
})

describe('PostLayout Component Test', () => {
    test('Should render without errors', () => {
        const component = shallow(<Provider store ={store}><PostLayout/></Provider>);
        expect(component.find(PostLayout).length).toBe(1);
    })
})

describe('PostMenu Component Test', () => {
    test('Should render without errors', () => {
        const component = shallow(<Provider store ={store}><PostMenu/></Provider>);
        expect(component.find(PostMenu).length).toBe(1);
    })
})


describe('EditButton Component Test', () => {
    test('Should render without errors', () => {
        const component = shallow(<Provider store ={store}><EditButton/></Provider>);
        expect(component.find(EditButton).length).toBe(1);
    })
})

describe('HideButton Component Test', () => {
    test('Should render without errors', () => {
        const component = shallow(<Provider store ={store}><HideButton/></Provider>);
        expect(component.find(HideButton).length).toBe(1);
    })
})

describe('DeleteButton Component Test', () => {
    test('Should render without errors', () => {
        const component = shallow(<Provider store ={store}><DeleteButton/></Provider>);
        expect(component.find(DeleteButton).length).toBe(1);
    })
})