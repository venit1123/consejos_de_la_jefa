import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App/>);
  const h1 = getByText(/This is the App container/);
  expect(h1).toHaveTextContent("This is the App container")
});
