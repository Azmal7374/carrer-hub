import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="my-container navbar bg-slate-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <div tabIndex={0} className="menu  dropdown-content mt-3 p-8 shadow bg-base-100 rounded-box w-52">
    
      <Link to="/" className="my-2" >Home</Link>
      <Link to="/statistics" className="my-2" >Statistics</Link>
     <Link to="/appliedJobs" className="my-2" >Applied Jobs</Link>
     <Link to="/blog">Blog</Link></div>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold">JobBoard</Link>
  </div>
  <div className="navbar hidden lg:flex ">
    <div className="menu menu-horizontal  px-8 ml-12 lg:ml-16">
    <Link to="/" className="mx-5" >Home</Link>
        <Link to="statistics" className="mx-5">Statistics</Link>
        <Link to="appliedJobs" className="mx-5">Applied Jobs</Link>
        <Link to="/blog" className="mx-5">Blog</Link>
          
    </div>
  </div>
  <div className="navbar-end md:mr-20">
    <a className=" bg-purple-500 p-2 rounded-lg text-white text-center w-32 hover:bg-purple-600">Star Applying</a>
  </div>
</div>
    );
};

export default Header; 