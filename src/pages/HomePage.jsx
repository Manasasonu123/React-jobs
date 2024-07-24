import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobList from '../components/JobList';
import Viewjobs from '../components/Viewjobs';

const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCards/>
    <JobList isHome={true}/>
    <Viewjobs/>
    </>
  )
}

export default HomePage