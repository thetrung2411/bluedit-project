import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import { Provider } from "react-redux";
import subscriptions from './subscriptions';
import allUser from './allUserTable';
import configureMockStore from "redux-mock-store";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";

const mockStore = configureMockStore();
const store = mockStore({});


describe('subscriptions Component Test', () => {
    test('subscriptions Component', () => {
        const component = shallow(<subscriptions/>);
        expect(component.exists()).toBe(true);
    });
})
