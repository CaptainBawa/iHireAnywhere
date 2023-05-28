import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';

const JobDetails = () => {
  const selectedJobDetails = useSelector((state) => state.jobs.jobs
    .filter((job) => job.details === true));
  const jobDetails = selectedJobDetails;

  return (
    <div>
      <Navigation />
      <ul>
        {jobDetails.map((details) => (
          <>
            <div>
              <img src={details.company_logo} alt={details.company_name} />
              <h1>
                company Name:
                {details.company_name}
              </h1>
            </div>
            <li key={details.id}>
              <div>
                <h2>
                  Job Title:
                  {details.title}
                </h2>
                <h2>
                  Job Type:
                  {details.job_type}
                </h2>
                <h2>
                  Job Date:
                  {details.publication_date}
                </h2>
                <h2>
                  Salary:
                  {details.salary}
                </h2>
                <h2>
                  Candidate Required Location:
                  {details.candidate_required_location}
                </h2>
                <h2>
                  Website:
                  {details.url}
                </h2>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default JobDetails;
