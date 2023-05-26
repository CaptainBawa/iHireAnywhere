import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Jobs from './components/Job';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Jobs />
    </div>
  </BrowserRouter>
);

export default App;
