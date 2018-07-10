import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Header from '../../components/commons/Header';

// global.localStorage = new LocalStorageMock;

configure({ adapter: new Adapter() });

describe('Header', () => {
it('should mount Header component', () => {
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})