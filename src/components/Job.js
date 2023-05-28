import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { fetchRemoteJobs, findJobDetails, noJobDetails } from '../redux/remoteJobs/remoteJobsSlice';
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
    <div>
      <Navigation />
      <div><h2>Remote Jobs</h2></div>
      <ul className="job">
        {jobs.map((job) => (
          <li key={job.id}>
            <button type="button" onClick={() => handleJobDetails(job.id)}>
              <img src={job.company_logo} alt={job.company_name} />
              <div>
                <h2>
                  company Name:
                  {job.company_name}
                </h2>
                <h2>
                  Job Title:
                  {job.title}
                </h2>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
