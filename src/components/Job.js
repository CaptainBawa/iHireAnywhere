import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Navigation from './Navigation';
import { fetchRemoteJobs, findJobDetails, noJobDetails } from '../redux/remoteJobs/remoteJobsSlice';
import businessman from '../assets/businessman.png';
// import { AllInbox } from '@mui/icons-material';

const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const navigate = useNavigate();

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

  return (
    <div className="job-container">
      <Navigation />
      <div className="screen">
        <img src={businessman} alt="man" />
        <h2>Remote Jobs</h2>
      </div>
      All available jobs
      <ul className="jobs-container">
        {jobs.map((job) => (
          <li key={job.id}>
            <button type="button" onClick={() => handleJobDetails(job.id)}>
              <ArrowCircleRightIcon />
              <img src={job.company_logo} alt={job.company_name} />
              <h2>
                Company Name:
                {job.company_name}
              </h2>
              <h2>
                Job Title:
                {job.title}
              </h2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
