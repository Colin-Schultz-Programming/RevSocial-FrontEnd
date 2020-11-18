import React from 'react';
import Enzyme, { ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Home } from '../../components/userHome/Home'

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
    it('renders', () => {
        const wrapper = new ShallowWrapper(<Home />)
        expect(wrapper).toBeDefined();
    })
})