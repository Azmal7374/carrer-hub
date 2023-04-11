import React from 'react';

 import group from '../assets/Icons/Group 9969.png'
const Footer = () => {
    return (
     <div className="bg-black mt-20">
     <div className=" text-white lg:flex justify-center items-center gap-20 lg:h-64 p-8">
     <div className="flex md:justify-center  items-center md:gap-20">
      <div className="mt-20">
      <h1 className='font-bold text-3xl'>JobBoard</h1>
      <p className='text-gray-400 mt-6'>Explore Thousands of job  opportunities <br /> with all the  information you needs. Its your future.</p>
      <img className="mt-6" src={group} alt="" />
      </div>
      <div className='mt-20 md:mt-24 lg:mt-16 text-center'>
      <h2 className='font-bold text-xl'>Company</h2>
      <p className='text-gray-400 mt-6'>About Us</p>
     <p className='text-gray-400 mt-2'>Work</p>
     <p className='text-gray-400 mt-2'>Latest News</p>
      <p className='text-gray-400 mt-2'>Careers</p>
    </div>
     </div>

    <div className="flex md:justify-center  gap-32 md:mt-16">
    
    <div className="">
    <h2 className="text-xl font-bold mt-8 md:mt-0">Product</h2>
    <p className='text-gray-400 mt-6'>Prototype</p>
    <p className='text-gray-400 mt-2'>Plans&Pricing</p>
    <p className='text-gray-400 mt-2'>Customers</p>
    <p className='text-gray-400 mt-2'>Integrations</p>
   </div>
   <div >
   <h2 className="text-xl font-bold mt-8 md:mt-0">Support</h2>
    <p className='text-gray-400 mt-6'>Help Desk</p>
    <p className='text-gray-400 mt-2'>Sales</p>
    <p className='text-gray-400 mt-2'>Become a Partner</p>
    <p className='text-gray-400 mt-2'>Developers</p>
   </div>
    </div>

    <div className='mt-16 lg:mt-2 md:text-center '>
    <h1 className="text-xl font-bold">Contact</h1>
    <p className='text-gray-400 mt-6'>524 Crowland, Barishal</p>
    <p className='text-gray-400 mt-2'>+1777-978-5570</p>
    </div>
 </div>

 <hr className='mx-6 md:mx-24 py-4 mt-5 border-purple-300' style={{}} />
     <div className='flex text-gray-400 justify-between items-center mx-6 md:mx-24 py-4'>
     <p className=''> &#169;2023 <span className='font-bold'>JobBoard</span>. All Rights Reserved</p>
     <p className=''>Powered by <span className='font-bold'>JobBoard</span></p>
     </div>
     </div>
    );
};

export default Footer;