import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RepoCard from './RepoCard';

test('renders RepoCard', () => {
  const repo = {
    url: "repourl",
    name: "reponame",
    description: "repodescription",
    stargazerCount: 200, 
    id: "repoid",
    licenseInfo: "OpenSource",
    primaryLanguage: "typescript",
    repo: {},
    updatedAt: "12-05-2021Z12:04+003"
  }
  render(<RepoCard {...repo} />);

  expect(screen.queryByTestId('description')).toHaveTextContent(repo.description);
  expect(screen.queryByTestId('name')).toHaveTextContent(repo.name);
  expect(screen.queryByTestId('info')).toHaveClass("small");
});