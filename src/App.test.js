import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name on page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Gabriel Allen Anareta/i);
  expect(linkElement).toBeInTheDocument();
});
