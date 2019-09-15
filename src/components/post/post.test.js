import React from 'react';
import {shallow} from 'enzyme';
import PostButton from './PostButton';
import PostItemDetail from './PostItemDetail';
import PostItems from './PostItems';
import PostLayout from './PostLayout';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

describe('PostButton Component Test', () => {
    test('Should render without errors', () => {
        const component = shallow(<Provider store ={store}><PostButton/></Provider>);
        expect(component.find(PostButton).length).toBe(1);
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