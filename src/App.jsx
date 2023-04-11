import React, { createContext } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
export const JobsContext = createContext([]);



const App = () => {
  const jobs = useLoaderData()
  return (
    <>
      <JobsContext.Provider value={jobs}>
      <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </JobsContext.Provider>
    </>
  );
};

export default App;