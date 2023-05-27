import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  jobs: [],
  status: 'idle',
  error: null,
};

export const fetchRemoteJobs = createAsyncThunk('jobs/fetchRemoteJobs', async () => {
  try {
    const response = await axios.get('https://remotive.com/api/remote-jobs?limit=10');
    return response.data.jobs;
  } catch (error) {
    throw new Error('Failed to fetch jobs');
  }
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    findJobDetails: (state, action) => {
      const jobId = action.payload;
      state.jobs = state.jobs.map((job) => (job.id === jobId
        ? { ...job, details: false } : job));
    },
    noJobDetails: (state, action) => {
      const jobId = action.payload;
      state.jobs = state.jobs.map((job) => (job.id === jobId
        ? { ...job, details: true } : job));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRemoteJobs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRemoteJobs.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.jobs = payload;
      })
      .addCase(fetchRemoteJobs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },

});

export const { findJobDetails, noJobDetails } = jobsSlice.actions;
export default jobsSlice.reducer;
