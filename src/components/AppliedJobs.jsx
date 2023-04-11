import React, { useEffect, useState } from "react";
import vertor from "../assets/All Images/Vector.png";
import img2 from "../assets/All Images/Vector-1.png";
import { useLoaderData, useParams } from "react-router-dom";
import { getStoredCart } from "../utilities/fakeDb";

import AppliedJobsShow from "./AppliedJobsShow";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [searchText, setSearchText] = React.useState("");
  const [job, setJob] = useState([]);
  useEffect(() => {
    const savedCart = getStoredCart();
    let cartArray = [];

    for (const id in savedCart) {
      const foundJob = jobs.find((job) => job.id === +id);

      if (foundJob) {
        cartArray.push(foundJob);
      }
    }
    setJob(cartArray);
  }, []);

  const handleFilterByRemote = () => {
    const remoteJobs = job.filter((job) => job.remoteOrOnsite === "Remote");
    setJob(remoteJobs);
  };

  const handleFilterByOnSite = () => {
    const onSiteJobs = job.filter((job) => job.remoteOrOnsite === "Onsite");
    setJob(onSiteJobs);
  };

  return (
    <div className="my-container">
      <div className="bg-slate-100 flex items-center">
        <img className="w-32 md:w-64 lg:w-96" src={vertor} alt="" />
        <h1 className="mx-auto text-center text-2xl font-bold">Applied Jobs</h1>
        <img className="w-32 md:w-64 lg:w-96" src={img2} alt="" />
      </div>

      <div>
       <div  className="text-center">
       <button
       onClick={handleFilterByRemote}
       className="my-btn mt-5 mx-8"
     >
       Remote
     </button>
     <button
       onClick={handleFilterByOnSite}
       className="my-btn"
     >
       Onsite
     </button>
       </div>

      

        {job.map((jb) => (
          <AppliedJobsShow jb={jb} key={jb.id}></AppliedJobsShow>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
