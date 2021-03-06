import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
    shallow(<App />);
});

it('should make proper calculus', () => {
    let a = 1 + 2;
    expect(a).toBe(3);
});

it('should make proper concat', () => {
    let a = "1" + "a";
    expect(a).toBe("1a");
});