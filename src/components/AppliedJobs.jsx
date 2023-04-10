import React, { useEffect, useState } from 'react';
import vertor from '../assets/All Images/Vector.png';
import img2 from '../assets/All Images/Vector-1.png'
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { getStoredCart } from '../utilities/fakeDb';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLocationDot,faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'


const AppliedJobs = () => {
    const jobs = useLoaderData()
    console.log(jobs);


    const [searchText, setSearchText] = React.useState("");
    const [job, setJob] =useState([])
    useEffect(() => {
        const savedCart = getStoredCart();
    console.log(savedCart);
    let cartArray = [];

    for( const id in savedCart ){
        console.log(id);
        const foundJob = jobs.find(job => job.id === +id);
        console.log(foundJob);
    
        if( foundJob){
            cartArray.push(foundJob)
        }
    }
    setJob(cartArray);
    },[])
    console.log(job);


     
    const handleFilterByRemote = () => {
        const remoteJobs =job.filter(job => job.remoteOrOnsite === 'Remote')
        setJob(remoteJobs)
      }
    
      const handleFilterByOnSite = () => {
        const onSiteJobs =job.filter(job => job.remoteOrOnsite === 'Onsite')
        setJob(onSiteJobs)
      }
 

    return (
        <div className="my-container">
        <div className="bg-slate-100 flex items-center">
         <img className='w-32 md:w-64 lg:w-96' src={vertor} alt="" />
            <h1 className="mx-auto text-center text-2xl font-bold">Applied Jobs</h1>
            <img className='w-32 md:w-64 lg:w-96' src={img2} alt="" />
        </div>
            
           <div className=''>
           
           <button onClick={handleFilterByRemote}  className="bg-purple-500 p-2 rounded-lg text-white text-center w-32 hover:bg-purple-600 mt-5 mx-8 md:mx-32">Remote</button>
           <button onClick={handleFilterByOnSite}  className="bg-purple-500 p-2 rounded-lg text-white text-center w-32 hover:bg-purple-600">Onsite</button>


           <div>
           
           </div>
          
             {
            job.map(jb => (

                <div className="mt-10 border rounded-md p-4 md:p-8 flex justify-between items-center gap-4">

      
                <div className=" flex gap-4">

                <img className="rounded-xl w-20 h-24  md:w-32 md:h-24" src={jb.companyLogo} alt="" />

                 <div>
                 <h2 className="font-bold text-xl">{jb.jobTitle}</h2>
                 <p className="text-gray-700 font-semibold">{jb.companyName}</p>
                 <div className="flex gap-5 font-semibold md:w-48">
                   <p className="text-center border border-purple-400 rounded-md p-1 text-purple-400">{jb.remoteOrOnsite}</p>
                   <p className="text-center border border-purple-400 rounded-md text-purple-400 p-1">{jb.fullTimeOrPartTime}</p>
                   </div>
                   <div className="flex justify-around text-gray-700 font-semibold">
                   <p><FontAwesomeIcon className="" icon={faLocationDot} /> <span className="mx-1">{jb.location}</span></p>
                   <p><FontAwesomeIcon icon={faCircleDollarToSlot}></FontAwesomeIcon> <span className="mx-1">Salary: {jb.salary}</span></p>
                   </div>
                 </div>
                 <div>
                 
                 </div>
                </div>
                <div>
                <Link to={`/jobDetails/${jb.id}`}>
             <button  className="bg-purple-500 p-2 rounded-lg text-white text-center w-32 hover:bg-purple-600">View Details</button>
             </Link>
                </div>

                </div>
            ))
        }

           </div>
       
     </div>
    );
};

export default AppliedJobs;