import React from 'react'; 
import vertor from '../assets/All Images/Vector.png';
import img2 from '../assets/All Images/Vector-1.png';

 

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

const Statistics = () => {

    const data = [
        {
          name: 'Assignment 1',
          marks: 60,
         
        },
        {
          name: 'Assignment 2',
          marks: 60,
          
        },
        {
          name: 'Assignment 3',
          marks: 60,
           
        },
        {
          name:'Assignment 4',
          marks: 60,
         
        },
        {
          name: 'Assignment 5',
          marks: 30,
          
        },
        {
          name:'Assignment 6',
          marks: 59,
           
        },
        {
          name:'Assignment 7',
          marks: 60,
         
        },
        {
            name:'Assignment 8',
            marks: 60,
           
          },
      ];
      

    return (
        <div className="my-container">
           <div className="bg-slate-100 flex items-center">
            <img className='w-32 md:w-64 lg:w-96' src={vertor} alt="" />
               <h1 className="mx-auto text-center text-2xl font-bold">Job Details</h1>
               <img className='w-32 md:w-64 lg:w-96' src={img2} alt="" />
           </div>

           <div className='mt-10'>
           <div className='' style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
           </div>


        </div>
    );
};

export default Statistics;