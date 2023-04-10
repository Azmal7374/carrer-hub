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


        

        <div className="container my-6 px-14 md:px-32 lg:px-64 py-6 flex justify-between bg-slate-200 mt-16 ">
        <div className="qna-area">
          <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              1. When should you use context API?
            </div>
            <div className="collapse-content text-start">
                
            </div>
          </div>
          <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              2. What is a custom hook?
            </div>
            <div className="collapse-content">
              <p>
                
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              3.What is useRef?  
            </div> 
            <div className="collapse-content">
              <p>
               
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              4. What is useMemo?
            </div>
            <div className="collapse-content">
              <p>
               
              </p>
              
            </div>
          </div>
        </div>
      </div>
        
        </div>
    );
};

export default Blog;