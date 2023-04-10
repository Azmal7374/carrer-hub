import React, { useEffect, useState } from 'react';
import vertor from '../assets/All Images/Vector.png';
import img2 from '../assets/All Images/Vector-1.png'
import { useLoaderData, useParams } from 'react-router-dom';
import { getStoredCart } from '../utilities/fakeDb';
const AppliedJobs = () => {

    const jobs = useLoaderData()
    console.log(jobs);
      
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

    const{jobTitle, companyName, remoteOrOnsite,  } = job

    return (
        <div className="my-container">
        <div className="bg-slate-100 flex items-center">
         <img className='w-32 md:w-64 lg:w-96' src={vertor} alt="" />
            <h1 className="mx-auto text-center text-2xl font-bold">Applied Jobs</h1>
            <img className='w-32 md:w-64 lg:w-96' src={img2} alt="" />
        </div>
            

        <div>

        <div>
        <img src="" alt="" />
        </div>
        <div>
        <h2 className="font-bold text-xl">{jobTitle}</h2>
        <p className="text-gray-700 font-semibold">{companyName}</p>
        <div className="flex gap-5 font-semibold md:w-48">
          <p className="text-center border border-purple-400 rounded-md p-1 text-purple-400">{remoteOrOnsite}</p>
          <p className="text-center border border-purple-400 rounded-md text-purple-400 p-1">{fullTimeOrPartTime}</p>
          </div>
          <div className="flex justify-around text-gray-700 font-semibold">
          <p><FontAwesomeIcon className="" icon={faLocationDot} /> <span className="mx-1">{location}</span></p>
          <p><FontAwesomeIcon icon={faCircleDollarToSlot}></FontAwesomeIcon> <span className="mx-1">Salary: {salary}</span></p>
          </div>
        </div>
        <div></div>
        
        </div>
     </div>
    );
};

export default AppliedJobs;