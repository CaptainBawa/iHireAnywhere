import React from 'react';
import { useSelector } from 'react-redux';

const JobDetails = () => {
  const selectedJobDetails = useSelector((state) => state.jobs.jobs
    .filter((job) => job.details === true));
  const jobDetails = selectedJobDetails;

  return (
    <div>
      <ul>
        {jobDetails.map((details) => (
          <li key={details.id}>
            <img src={details.company_logo} alt={details.company_name} />
            <div>
              <h1>
                company Name:
                {details.company_name}
              </h1>
              <p>
                Job Title:
                {details.title}
              </p>
              <p>
                Job Type:
                {details.job_type}
              </p>
              <p>
                Job Date:
                {details.publication_date}
              </p>
              <p>
                Salary:
                {details.salary}
              </p>
              <p>
                Candidate Required Location:
                {details.candidate_required_location}
              </p>
              <p>
                Website:
                {details.url}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobDetails;
