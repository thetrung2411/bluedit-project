import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import { Provider } from "react-redux";
import userPost from './userPost';
import postItems from '../post/PostItems';
import SubscribedUserTable from './SubscribedUserTable';
import configureMockStore from "redux-mock-store";
import * as types from "../../redux/types";
import Adapter from "enzyme-adapter-react-16"
const mockStore = configureMockStore();
const store = mockStore({});


describe('userpost Component Test', () => {
    test('userpost Component', () => {
        const component = shallow(<userPost/>);
        expect(component.exists()).toBe(true);
    });

    test('userpost Component', () => {
        const component = shallow(<postItems/>);
        expect(component.exists()).toBe(true);
    });
})