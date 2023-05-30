import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Jobs from '../components/Job';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Jobs component', () => {
  it('dispatches findJobDetails if job details are available', () => {
    const mockJob = {
      id: 1,
      title: 'Job 1',
      company_logo: 'logo1',
      company_name: 'Company 1',
      details: true,
    };
    const initialState = {
      jobs: {
        jobs: [mockJob],
      },
    };
    const store = mockStore(initialState);
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Jobs />
        </MemoryRouter>
      </Provider>
    );
    fireEvent.click(getByText(/Job Title:/));
    expect(store.getActions()).toContainEqual({
      type: 'jobs/findJobDetails',
      payload: mockJob.id,
    });
    expect(navigate).toHaveBeenCalledWith(`/jobdetails/${mockJob.id}`);
  });

  it('dispatches noJobDetails if job details are not available', () => {
    const mockJob = {
      id: 1,
      title: 'Job 1',
      company_logo: 'logo1',
      company_name: 'Company 1',
      details: false,
    };
    const initialState = {
      jobs: {
        jobs: [mockJob],
      },
    };
    const store = mockStore(initialState);
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Jobs />
        </MemoryRouter>
      </Provider>
    );
    fireEvent.click(getByText(/Job Title:/));
    expect(store.getActions()).toContainEqual({
      type: 'jobs/noJobDetails',
      payload: mockJob.id,
    });
    expect(navigate).toHaveBeenCalledWith(`/jobdetails/${mockJob.id}`);
  });
});
