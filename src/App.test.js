import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App } from './App';
import renderer from 'react-test-renderer';
import Todo from './Todo';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App tasks={[{ name: 'un', done: false }]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Starts with 1 task', () => {
    const wrapper = shallow(<App tasks={[{ name: 'un', done: false }]} />);
    const todo = wrapper.find(Todo);

    expect(todo).toHaveLength(1);
  });

  it('matches snapshot', () => {
    const wrapper = renderer.create(<App tasks={[{ name: 'un', done: false }]} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
