import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRemoteJobs } from '../redux/remoteJobs/remoteJobsSlice';

const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);

  useEffect(() => {
    dispatch(fetchRemoteJobs());
  }, [dispatch]);

  if (!jobs.length) {
    return (
      <div>Loading</div>
    );
  }

  return (
    <div>
      <ul className="rocket">
        {jobs.map((job) => (
          <li key={job.id}>
            <img src={job.company_logo} alt={job.company_name} />
            <div>
              <h1>
                company Name:
                {job.company_name}
              </h1>
              <p>
                Job Title:
                {job.title}
              </p>
              <p>
                Job Type:
                {job.job_type}
              </p>
              <p>
                Job Date:
                {job.publication_date}
              </p>
              <p>
                Salary:
                {job.salary}
              </p>
              <p>
                Candidate Required Location:
                {job.candidate_required_location}
              </p>
              <p>
                Website:
                {job.url}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
