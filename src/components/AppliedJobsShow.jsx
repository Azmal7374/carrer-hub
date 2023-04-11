import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLocationDot,faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const AppliedJobsShow = ({jb}) => {
    return (
        <div>
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
        </div>
    );
};

export default AppliedJobsShow;