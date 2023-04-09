import React from 'react';
 import banner from '../assets/All Images/P3OLGJ1 copy 1.png'
const Home = () => {
    return (
        <div className="banner my-container bg-slate-100 md:flex justify-between">
         
        <div className="">
            <h1 className="text-5xl font-bold leading-tight">One Step <br /> Closer To Your <br /> <span className="text-purple-500">Dream Job</span></h1>
            <p className="mt-4 text-gray-600">Explore thousands of job opportunities with all the <br /> information you need its future.Come find it. Mange all <br /> your application from start to finish.</p>
          
            <button className='mt-5 bg-purple-700 p-2 rounded-lg text-white text-center w-32'>Get Started</button>
        </div>
          
        <div>
            <img className='mt-5 object-fill h-full w-96 md:mr-4 lg:mr-10' src= {banner} alt="" />

        </div>
        </div>
    );
};

export default Home;