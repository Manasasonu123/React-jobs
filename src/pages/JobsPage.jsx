import React from 'react'
import JobList from '../components/JobList'
// import jobs from '../jobs.json';

const JobsPage = () => {
    return (
      <section className='bg-blue-50 px-5 py-6'>
        {/* {jobs.map(job => (
          <EachJobs key={job.id} job={job} />
        ))} */}
        <JobList/>
      </section>
    );
  };

export default JobsPage