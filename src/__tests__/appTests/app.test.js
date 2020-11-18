import React from 'react';
import Enzyme, { ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../App';
import { Landing } from '../../components/landing/Landing';
import 'regenerator-runtime/runtime'
import "babel-polyfill"
import RegisterButton from '../../components/landing/register/Register Button';
import { Provider } from 'react-redux';
import { store } from '../../store';
import LoginButton from '../../components/landing/login/Login Button';
import { Register } from '../../components/landing/register/Register';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('renders', () => {
        const wrapper = new ShallowWrapper(<App />);
        expect(wrapper).toBeDefined();
    })
    it('renders <Landing />', () => {
        const wrapper = new ShallowWrapper(<App />);
        expect(wrapper.find(<Landing />)).toBeDefined();
    })
})

describe('<Landing />', () => {
    it('renders <RegisterButton/>', () => {
        const wrapper = new ShallowWrapper(<Provider store={store}/>);
        expect(wrapper.find(<RegisterButton />)).toBeDefined();
    })
    it('renders <LoginButton />', () => {
        const wrapper = new ShallowWrapper(<Provider store={store} />);
        expect(wrapper.find(<LoginButton />)).toBeDefined();
    })
})

describe('<RegisterButton', () => {
    it('renders <Register />', () => {
        const wrapper = new ShallowWrapper(<Provider store={store} />)
        expect(wrapper.find(<Register />)).toBeDefined();
    })
})

// describe('<Register />', () => {
//     it('renders a form', async () => {
//         const wrapper = new ShallowWrapper(<Provider store={} />)
//         await expect(wrapper.simulate(handleSubmit())).resolves.toBeCalled(1);
//     })
// })