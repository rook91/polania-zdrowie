function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// import React from 'react';
// import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
//
// // Component to be tested
// import NavItem from '../../src/components/NavItem';
//
// describe('<NavItem />', () => {
//   describe('NavItem tests', () => {
//     test('renders the component', () => {
//       const wrapper = shallow(<NavItem />);
//       const component = wrapper.dive();
//
//       expect(toJson(component)).toMatchSnapshot();
//     });
//   });
// });
