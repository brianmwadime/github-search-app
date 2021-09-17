import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserCard from './UserCard';

test('renders UserCard', () => {
  const user = {
    id: "12345",
    bio: "awesome developer",
    name: "John doe",
    url: "https://github.com/johndoe",
  }
  render(<UserCard {...user} />);

  expect(screen.queryByTestId('description')).toHaveTextContent(user.bio);
  expect(screen.queryByTestId('email')).toHaveTextContent("");
  expect(screen.queryByTestId('name')).toHaveTextContent(user.name);
});