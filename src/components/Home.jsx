import React, { useContext, useEffect, useState } from 'react';
 import banner from '../assets/All Images/P3OLGJ1 copy 1.png';
 import accounts from '../assets/Icons/accounts 1.png';
import creativeDesign from '../assets/Icons/business 1.png';
import marketing from '../assets/Icons/social-media 1.png'
import engineeringJob from '../assets/Icons/chip 1.png';
import FeaturedJobs from './FeaturedJobs';
import { useLoaderData } from 'react-router-dom';
import JobList from './JobList';

const Home = () => {
    const jobs = useLoaderData()
    const [show, setShow] =  useState(false)

    const [lists,  setLists] =useState([])
     useEffect(() =>{
      fetch('categorylist.json')
      .then(res => res.json())
      .then(data => setLists(data))
     },[])



       console.log(lists);
    
    return (
       <>
       <section className="banner-section my-container bg-slate-100 md:flex justify-between">
         
       <div className="">
           <h1 className="text-5xl font-bold leading-tight">One Step <br /> Closer To Your <br /> <span className="text-purple-500">Dream Job</span></h1>
           <p className="mt-4 text-gray-600">Explore thousands of job opportunities with all the <br /> information you need its future.Come find it. Mange all <br /> your application from start to finish.</p>
         
           <button className='mt-5 my-btn'>Get Started</button>
       </div>
         
       <div>
           <img className='mt-5 object-fill h-full w-96 md:mr-4 lg:mr-10' src= {banner} alt="" />

       </div>
       </section>



       <section className="job-category-list-section my-container my-8">
       <h1 className='text-2xl font-bold text-black text-center'>Job Category List</h1>
       <p  className="mt-4 text-gray-600 text-center">Explore thousands of job opportunities with all the information you need its your future</p>
      <div className=" mt-2 flex flex-wrap my-container justify-center gap-8">
      {
        lists.map(list =><JobList list={list} key={list.jobs}></JobList>)
       }
      </div>
       </section>

     

       <section className="featured-jobs my-container my-8">
       <h1 className='text-2xl font-bold text-black text-center'>Featured Job</h1>
       <p  className="mt-4 text-gray-600 text-center">Explore thousands of job opportunities with all the information you need its your future</p>
        <div className=" grid md:grid-cols-2 justify-center gap-10 mt-4">
       {
       !show ? 
       jobs.slice(0,4).map(job =><FeaturedJobs key={job.id} job={job}></FeaturedJobs>)
       
       : jobs.map(job =><FeaturedJobs key={job.id} job={job}></FeaturedJobs>)
        
       }
        </div>

         <p className="text-center">
         <button onClick={()=>setShow(true)}  className=' mt-5 my-btn'>See All Jobs</button>
         </p>
        
       </section>
       
       </>
    );
};

export default Home;