import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserProfile from './UserProfile';

test('renders UserCard', () => {

  render(<UserProfile />);

  expect(screen.queryByTestId('name')).toHaveTextContent("John Doe");
});