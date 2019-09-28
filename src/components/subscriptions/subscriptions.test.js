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

<<<<<<< HEAD
//     test('allUser Component', () => {
//         const component = shallow(<allUser/>);
//         expect(component.exists()).toBe(true);
//     });
})
=======
    test('allUser Component', () => {
        const component = shallow(<allUser/>);
        expect(component.exists()).toBe(true);
    });
})
>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586
