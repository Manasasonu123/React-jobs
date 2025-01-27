import React from 'react'
import { useState,useEffect } from 'react';
import JobListing from './EachJobs'
import Spinner from './Spinner'

//This is container of job lists

const jobList = ({isHome=false}) => {
    // console.log(jobs)
    // const joblistings=isHome ? jobs.slice(0,3):jobs;
    const [jobs,setJobs] = useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
      const fetchJobs=async()=>{
        const apiUrl=isHome ? '/api/jobs?_limit=3':
        '/api/jobs'
        try{
          const res=await fetch(apiUrl)
          const data=await res.json();
          setJobs(data)
        }catch(error){
          console.log('Error fetching data',error)
        }finally{
          setLoading(false)
        }
      
      }
      fetchJobs();
    },[])

  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {isHome ? 'Recent Jobs':'Browse Jobs'}
      </h2>
        { loading ? (
          <Spinner loading={loading} />
        ):(
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <>{jobs.map((job) =>(
            //eslint-disable-next-line react/jsx-key
           <JobListing key={job.id} job={job}/>
        ) ) }</></div>)}
    </div>
  </section>
  )
}

export default jobList