import React, { ChangeEvent } from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchField from './SearchField';

test('renders SearchField', () => {
  const props = {
    text: "12345",
    onQueryChange: jest.fn(),
    
  }

  const handleSearch = jest.fn();

  render(<SearchField {...props} />);

  expect(screen.getByRole('textbox')).toHaveValue(props.text);
  
});