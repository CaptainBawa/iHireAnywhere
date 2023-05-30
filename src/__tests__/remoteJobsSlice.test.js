import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { fetchRemoteJobs, findJobDetails, noJobDetails } from '../redux/remoteJobs/remoteJobsSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Remote Jobs Slice', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('fetchRemoteJobs success', async () => {
    const mockJobs = [
      { id: 1, title: 'Job 1', company_logo: 'logo1', company_name: 'Company 1' },
      { id: 2, title: 'Job 2', company_logo: 'logo2', company_name: 'Company 2' },
    ];

    jest.spyOn(axios, 'get').mockResolvedValue({ data: { jobs: mockJobs } });

    const store = mockStore({ jobs: [], status: 'idle', error: null });

    await store.dispatch(fetchRemoteJobs());

    const actions = store.getActions();
    expect(actions[0].type).toEqual('jobs/fetchRemoteJobs/pending');
    expect(actions[1].type).toEqual('jobs/fetchRemoteJobs/fulfilled');
    expect(actions[1].payload).toEqual(mockJobs);
  });

  it('fetchRemoteJobs failure', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue(new Error('Failed to fetch jobs'));

    const store = mockStore({ jobs: [], status: 'idle', error: null });

    await store.dispatch(fetchRemoteJobs());

    const actions = store.getActions();
    expect(actions[0].type).toEqual('jobs/fetchRemoteJobs/pending');
    expect(actions[1].type).toEqual('jobs/fetchRemoteJobs/rejected');
    expect(actions[1].error.message).toEqual('Failed to fetch jobs');
  });

  it('findJobDetails and noJobDetails', () => {
    const initialState = {
      jobs: [
        { id: 1, title: 'Job 1', details: true },
        { id: 2, title: 'Job 2', details: true },
      ],
    };

    const store = mockStore(initialState);

    store.dispatch(findJobDetails(1));
    let actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'jobs/findJobDetails', payload: 1 });

    store.dispatch(noJobDetails(1));
    actions = store.getActions();
    expect(actions[1]).toEqual({ type: 'jobs/noJobDetails', payload: 1 });
  });
});