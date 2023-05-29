import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import MicIcon from '@mui/icons-material/Mic';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Navigation = () => (
  <nav>
    <ul>
      <li className="back">
        <KeyboardArrowLeftIcon style={{ fontSize: '2.5em' }} />
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
