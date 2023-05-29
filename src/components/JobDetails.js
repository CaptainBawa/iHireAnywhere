import React from 'react';
import { useSelector } from 'react-redux';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Navigation from './Navigation';

const JobDetails = () => {
  const selectedJobDetails = useSelector((state) => state.jobs.jobs
    .filter((job) => job.details === true));
  const jobDetails = selectedJobDetails;

  return (
    <div className="details-container">
      <Navigation />
      <ul>
        {jobDetails.map((details) => (
          <>
            <div className="screen">
              <img src={details.company_logo} alt={details.company_name} />
              <h1>
                Company Name:
                {details.company_name}
              </h1>
            </div>
            <li key={details.id}>
              <h2>
                Job Title:
                {details.title}
                <ArrowCircleRightIcon />
              </h2>
              <h2>
                Job Type:
                {details.job_type}
                <ArrowCircleRightIcon />
              </h2>
              <h2>
                Job Date:
                {details.publication_date}
                <ArrowCircleRightIcon />
              </h2>
              <h2>
                Salary:
                {details.salary}
                <ArrowCircleRightIcon />
              </h2>
              <h2>
                Candidate Required Location:
                {details.candidate_required_location}
                <ArrowCircleRightIcon />
              </h2>
              <h2>
                Website:
                {details.url}
                <ArrowCircleRightIcon />
              </h2>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default JobDetails;
