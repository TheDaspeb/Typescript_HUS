import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders reusable ui component showcase', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /biblioteca tipada de button, badge y card/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByText(/panel de conversion/i)).toBeInTheDocument();
  expect(screen.getByText(/ver reporte/i)).toBeInTheDocument();
});
