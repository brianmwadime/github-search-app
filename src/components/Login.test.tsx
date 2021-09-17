import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

test('renders Login to Github', () => {
  render(<Login />);
  expect(screen.getByRole('button')).toHaveTextContent('Login to Github');
});