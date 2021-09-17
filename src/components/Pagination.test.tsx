import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';

test('disable previous', () => {
  const props = {
    sstart: "XFrbrtdfW",
    end : "XGrbrtdfW",
    next  : true,
    previous  : false,
    onPage: jest.fn(),
  }
  render(<Pagination {...props} />);

  expect(screen.queryByTestId('next')).toBeEnabled();
  expect(screen.queryByTestId('previous')).toBeDisabled();
});

test('disable next', () => {
  const props = {
    start: "XFrbrtdfW",
    end : "XGrbrtdfW",
    next  : false,
    previous  : true,
    onPage: Function,
  }
  render(<Pagination {...props} />);

  expect(screen.queryByTestId('next')).toBeDisabled();
  expect(screen.queryByTestId('previous')).toBeEnabled();
});