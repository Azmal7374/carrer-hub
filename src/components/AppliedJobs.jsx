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

      <div className="">
        <button
          onClick={handleFilterByRemote}
          className="bg-purple-500 p-2 rounded-lg text-white text-center w-32 hover:bg-purple-600 mt-5 mx-8 md:mx-32"
        >
          Remote
        </button>
        <button
          onClick={handleFilterByOnSite}
          className="bg-purple-500 p-2 rounded-lg text-white text-center w-32 hover:bg-purple-600"
        >
          Onsite
        </button>

        <div></div>

        {job.map((jb) => (
          <AppliedJobsShow jb={jb} key={jb.id}></AppliedJobsShow>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
