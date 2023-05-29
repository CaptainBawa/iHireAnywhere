import React from 'react';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import MicIcon from '@mui/icons-material/Mic';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Navigation = () => (
  <nav>
    <ul>
      <li className="back">
        <Link to="/" style={{ color: '#fff' }}><KeyboardArrowLeftIcon style={{ fontSize: '2.5em' }} /></Link>
        2023
      </li>
      <li className="remote">All Remote Jobs</li>
      <li className="settings">
        <div>
          <MicIcon />
        </div>
        <div className="divider">
          <SettingsIcon />
        </div>
      </li>
    </ul>
  </nav>
);

export default Navigation;
