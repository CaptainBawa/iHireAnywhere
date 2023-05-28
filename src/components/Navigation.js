import React from 'react';
// import { NavLink } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import MicIcon from '@mui/icons-material/Mic';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Navigation = () => (

  <nav>
    <ul>
      <li>
        <KeyboardArrowLeftIcon />
        2023
      </li>
      <li>
        <MicIcon />
      </li>
      <li>All Remote Jobs</li>
      <li className="divider">
        <SettingsIcon />
      </li>
    </ul>
  </nav>
);

export default Navigation;
