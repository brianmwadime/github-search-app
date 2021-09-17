import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NotFound from './NotFound';

test('renders NotFound', () => {
 
  render(<NotFound />);

  expect(screen.getByRole('heading')).toHaveTextContent("Not Found");
  expect(screen.queryByTestId('error')).toHaveTextContent("The page you are looking for does not exist...");
});