import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './remoteJobs/remoteJobsSlice';

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});
export default store;
