import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  jobs: [],
  status: 'idle',
  error: null,
};

const getJobs = {
  method: 'GET',
  url: 'https://remote-jobs-api.p.rapidapi.com/jobs',
  headers: {
    'X-RapidAPI-Key': '50ac3716f5msh6f904c1a970dbbcp164a1bjsnb5d27d85e2b5',
    'X-RapidAPI-Host': 'remote-jobs-api.p.rapidapi.com',
  },
};

export const fetchRemoteJobs = createAsyncThunk('jobs/fetchRemoteJobs', async () => {
  try {
    const response = await axios.get(getJobs.url,
      { headers: getJobs.headers });
    console.log(response.data);
    // const selectedData = response.data.map((rocket) => ({
    //   id: rocket.id,
    //   rocket_name: rocket.name,
    //   description: rocket.description,
    //   rocket_flickr_images: rocket.flickr_images,
    // }));
    // return selectedData;
  } catch (error) {
    throw new Error('Failed to fetch jobs');
  }
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
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

// export const { } = jobsSlice.actions;
export default jobsSlice.reducer;
