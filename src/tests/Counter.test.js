// import necessary react testing library helpers here
// import the Counter component here

import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from '../components/Counter'
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.queryByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterValue = screen.getByTestId(/count/i);
  expect(counterValue).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const counterValue = screen.queryByTestId(/count/i);
  expect(counterValue).toBeInTheDocument();
  userEvent.click(screen.getByText('+'))
  const counterValue2 = screen.queryByTestId(/count/i);
  expect(counterValue2).toBeInTheDocument();

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const counterValue = screen.queryByTestId(/count/i);
  expect(counterValue).toBeInTheDocument();
  userEvent.click(screen.getByText('-'))
  const counterValue2 = screen.queryByTestId(/count/i);
  expect(counterValue2).toBeInTheDocument();
});
