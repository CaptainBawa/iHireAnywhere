import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './remoteJobs/remoteJobsSlice';
// import jobsReducer, { fetchRemoteJobs } from './remoteJobs/remoteJobsSlice';

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});
export default store;
// export default store.dispatch(fetchRemoteJobs());
