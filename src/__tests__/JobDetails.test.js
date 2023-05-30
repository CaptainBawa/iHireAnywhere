import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import JobDetails from '../components/JobDetails';

const mockStore = configureMockStore([]);

describe('JobDetails component', () => {
  it('renders job details correctly', () => {
    const mockJobDetails = [
      {
        id: 1,
        title: 'Job 1',
        company_logo: 'logo1',
        company_name: 'Company 1',
        job_type: 'Full-time',
        publication_date: '2023-05-30',
        salary: '100000',
        candidate_required_location: 'Remote',
        url: 'https://example.com',
        details: true,
      },
    ];
    const initialState = {
      jobs: {
        jobs: mockJobDetails,
      },
    };
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <JobDetails />
        </MemoryRouter>
      </Provider>
    );

    expect(getByText(/Company Name:/)).toBeInTheDocument();
    expect(getByText(/Job Type:/)).toBeInTheDocument();
    expect(getByText(/Job Date:/)).toBeInTheDocument();
    expect(getByText(/Salary:/)).toBeInTheDocument();
    expect(getByText(/Location:/)).toBeInTheDocument();
    expect(getByText(/Website:/)).toBeInTheDocument();
  });
});
