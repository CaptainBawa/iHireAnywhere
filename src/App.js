import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Jobs from './components/Job';
import JobDetails from './components/JobDetails';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <JobDetails />
      <Jobs />
    </div>
  </BrowserRouter>
);

export default App;
