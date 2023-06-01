import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Navigation from './Navigation';
import { fetchRemoteJobs, findJobDetails, noJobDetails } from '../redux/remoteJobs/remoteJobsSlice';
import support from '../assets/support.png';

const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchRemoteJobs());
  }, [dispatch]);

  if (!jobs.length) {
    return <div>Loading</div>;
  }

  const handleJobDetails = (jobId) => {
    const job = jobs.find((findjob) => findjob.id === jobId);
    if (job && job.details) {
      dispatch(findJobDetails(jobId));
    } else {
      dispatch(noJobDetails(jobId));
    }
    navigate(`/jobdetails/${jobId}`);
  };

  const getJobTitle = (title) => {
    if (title.length > 31) {
      return `${title.slice(0, 31)}...`;
    }
    return title;
  };

  const filteredJobs = jobs.filter((job) => job.title.toLowerCase()
    .includes(searchQuery.toLowerCase()));

  return (
    <div className="job-container">
      <Navigation year="2023" text="All Remote Jobs" />
      <div className="screen desk-screen">
        <img src={support} alt="man" />
        <h2>Remote Jobs</h2>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search by job title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
        />
      </div>
      <ul className="jobs-container">
        {filteredJobs.map((job) => (
          <li key={job.id}>
            <button type="button" onClick={() => handleJobDetails(job.id)}>
              <ArrowCircleRightIcon style={{
                position: 'relative', left: '40%', bottom: '5%', color: '#fff',
              }}
              />
              <img src={job.company_logo} alt={job.company_name} />
              <h2>
                Job Title:
                {getJobTitle(job.title)}
              </h2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
