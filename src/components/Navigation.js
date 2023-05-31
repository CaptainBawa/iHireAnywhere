import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import MicIcon from '@mui/icons-material/Mic';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Navigation = ({ text, year }) => (
  <nav>
    <ul>
      <li className="back">
        <Link to="/" style={{ color: '#fff' }}><KeyboardArrowLeftIcon style={{ fontSize: '2.5em' }} /></Link>
        {year}
      </li>
      <li className="remote">{text}</li>
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

Navigation.propTypes = {
  text: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default Navigation;
