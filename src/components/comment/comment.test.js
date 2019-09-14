import React from 'react';
import {shallow} from 'enzyme';
import CommentField from './CommentField';
import CommentItem from './CommentItem';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

describe('CommentField Component Test', () => {
    test('Should render without errors', () => {
        const component = shallow(<Provider store ={store}><CommentField/></Provider>);
        expect(component.find(CommentField).length).toBe(1);
    })
})
describe('CommentItem Component Test', () => {
    test('Should render without errors', () => {
        const component = shallow(<Provider store ={store}><CommentItem/></Provider>);
        expect(component.find(CommentItem).length).toBe(1);

    })
})