import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Jobs from './components/Job';
import JobDetails from './components/JobDetails';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/jobdetails/:id" element={<JobDetails />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
