import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Kids Teaching Code heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to Kids Teaching Code/i);
  expect(headingElement).toBeInTheDocument();
});
