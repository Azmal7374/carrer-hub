import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { BriefcaseIcon, PhoneIcon, EnvelopeIcon,  } from '@heroicons/react/24/solid'


import vertor from '../assets/All Images/Vector.png';
import img2 from '../assets/All Images/Vector-1.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleDollarToSlot
} from "@fortawesome/free-solid-svg-icons";

const JobDetails = () => {
  const job = useLoaderData();
  console.log(job);

  const { id } = useParams();
  console.log(id);

  const [details, setDetails] = useState([]);

  useEffect(() => {
    if (job) {
      const detailsData = job.find((dt) => dt.id == id);
      console.log(detailsData);
      setDetails(detailsData);
    }
  }, []);

  console.log(details);

  return (

     <>
    <div className="bg-slate-100 flex items-center">
     <img className='w-32 md:w-64 lg:w-96' src={vertor} alt="" />
        <h1 className="mx-auto text-center text-2xl font-bold">Job Details</h1>
        <img className='w-32 md:w-64 lg:w-96' src={img2} alt="" />
    </div>
    <div className="my-container mt-16 gap-14 md:flex ">
      <div className="w-full">
        <p className="">
          <span className="font-bold"> Job DEscription: </span>
          <span className="text-gray-700">{details.jobDescription}</span>
        </p>
        <p className="mt-6 mb-6">
          <span className="font-bold"> Job DEscription: </span>
          <span className="text-gray-700">{details.jobResponsibility}</span>
        </p>
        <span className="font-bold">Educational Requirements:</span>
        <p className="mt-6 mb-6 text-gray-700">
          {details.educationalRequirements}
        </p>
        <span className="font-bold">Experience: </span>
        <p className="mt-6 text-gray-700">{details.experience}</p>
      </div>

      <div>
        <div className=" w-96 bg-slate-100 border rounded-md mt-10 md:mt-0">
          <div className="card-body">
            <h2 className="font-bold">Job Details</h2>
            <hr className="mt-2 " />
            <p className="text-gray-700">
              {" "}
              <span className="font-semibold">Salary: </span><FontAwesomeIcon className="mx-2" icon={faCircleDollarToSlot}></FontAwesomeIcon>
              {details.salary}
            </p>
            <p className="text-gray-700 flex">
              <span className="font-semibold">Job Title: </span> <BriefcaseIcon className="w-5 mx-2"></BriefcaseIcon>
              {details.jobTitle}
            </p>
            <h2 className="font-bold"> Contact Information</h2>
            <hr className="mt-2" />
            <p className="text-gray-700 flex">
              <span className="font-semibold">Phone: </span><PhoneIcon className="w-5 mx-2"></PhoneIcon>
              {details.contactInformation
                ? details.contactInformation.phone
                : "not"}
            </p>
            <p className="text-gray-700 flex">
              <span className="font-semibold">Email: </span><EnvelopeIcon className="w-5 mx-2"></EnvelopeIcon>
              {details.contactInformation
                ? details.contactInformation.email
                : "not"}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Address: </span><FontAwesomeIcon className="mx-2" icon={faLocationDot}></FontAwesomeIcon>
              {details.location}
            </p>
          </div>
        </div>
        <div className="">
          <button className="block mt-4 bg-purple-500 p-2 rounded-lg text-white text-center w-96 hover:bg-purple-600">
            Apply Now
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default JobDetails;
