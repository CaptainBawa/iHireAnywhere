import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRemoteJobs } from '../redux/remoteJobs/remoteJobsSlice';

const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  console.log(jobs);

  useEffect(() => {
    dispatch(fetchRemoteJobs());
  }, [dispatch]);

  return (
    <div>
      <ul className="rocket">
        {Array.from(jobs).map((job) => (
          <li key={job.id}>
            <img src={job.company_logo} alt={job.company_name} />
            <div>
              <h1>{job.company_name}</h1>
              <p>{job.title}</p>
              <p>{job.date}</p>
              <p>{job.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
