import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
      <div className="my-container">
        <div className=" navbar bg-slate-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <div tabIndex={0} className="menu  dropdown-content mt-3 p-8 shadow bg-base-100 rounded-box w-52">
    
      <NavLink to="/"
      ClassName = {({ isActive }) => (isActive ? 'active' : 'default')}
      className="my-2" >Home</NavLink>
      <NavLink to="/statistics"
      ClassName = {({ isActive }) => (isActive ? 'active' : 'default')}
      className="my-2" >Statistics</NavLink>
     <NavLink to="/appliedJobs"
     ClassName = {({ isActive }) => (isActive ? 'active' : 'default')}
     className="my-2" >Applied Jobs</NavLink>
     <NavLink to="/blog">Blog</NavLink></div>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold">JobBoard</Link>
  </div>
  <div className="navbar hidden lg:flex ">
    <div className="menu menu-horizontal  px-8 ml-12 lg:ml-16">
    <NavLink to="/"
    ClassName = {({ isActive }) => (isActive ? 'active' : 'default')}
    className="mx-5" >Home</NavLink>
        <NavLink to="statistics"
        ClassName = {({ isActive }) => (isActive ? 'active' : 'default')}
        className="mx-5">Statistics</NavLink>
        <NavLink to="appliedJobs"
        ClassName = {({ isActive }) => (isActive ? 'active' : 'default')}
        className="mx-5">Applied Jobs</NavLink>
        <NavLink to="/blog"
        ClassName = {({ isActive }) => (isActive ? 'active' : 'default')}
        className="mx-5">Blog</NavLink>
          
    </div>
  </div>
  <div className="navbar-end md:mr-20">
    <a className="my-btn">Star Applying</a>
  </div>
</div>
</div>
    );
};

export default Header; 