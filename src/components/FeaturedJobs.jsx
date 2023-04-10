import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLocationDot,faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const FeaturedJobs = ({job}) => {
    // console.log(job);
    const {id, companyLogo, jobTitle,companyName, location, salary, fullTimeOrPartTime, remoteOrOnsite
    } = job;
    return (
        <div className=" w-full bg-base-100 rounded-md border">
        <figure className="px-8 mt-6">
          <img src={companyLogo} alt="Shoes" className="rounded-xl w-32 h-24" />
        </figure>
        <div className="card-body">
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
          <div className="card-actions">
             <Link to={`/jobDetails/${id}`}>
             <button  className="bg-purple-500 p-2 rounded-lg text-white text-center w-32 hover:bg-purple-600">View Details</button>
             </Link>
          </div>
        </div>

        
      </div>
    );
};

export default FeaturedJobs;






 