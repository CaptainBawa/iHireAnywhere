import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

describe('Navigation component', () => {
  it('renders navigation correctly', () => {
    const text = 'Job Details';
    const year = '2023';

    const { getByText } = render(
      <MemoryRouter>
        <Navigation text={text} year={year} />
      </MemoryRouter>
    );

    expect(getByText(year)).toBeInTheDocument();
    expect(getByText(text)).toBeInTheDocument();
  });
});
