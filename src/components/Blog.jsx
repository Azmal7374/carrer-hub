import React from 'react';
import vertor from '../assets/All Images/Vector.png';
import img2 from '../assets/All Images/Vector-1.png'
const Blog = () => {
    return (
        <div className="my-container">
        <div className="bg-slate-100 flex items-center">
         <img className='w-32 md:w-64 lg:w-96' src={vertor} alt="" />
            <h1 className="mx-auto text-center text-2xl font-bold">Blog page here</h1>
            <img className='w-32 md:w-64 lg:w-96' src={img2} alt="" />
        </div>
     </div>
    );
};

export default Blog;