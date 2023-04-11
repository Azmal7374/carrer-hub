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
                <p>
                -->Managing state is an essential part of developing applications in React. A common way to manage state is by passing props. Passing props means sending data from one component to another. It's a good way to make sure that data gets to the right place in a React application.
                </p>

                <p>
                -->Fortunately, React provides a built-in feature known as the context API that helps  “teleport” data to the components that need it without passing props.
                </p>
            </div>
          </div>
          <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              2. What is a custom hook?
            </div>
            <div className="collapse-content">
              <p>
              -->Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.
              </p>
              <li>As a function, it takes input and returns output.</li>
              <li>Its name starts with use like useQuery, useMedia....</li>
              <li>Unlike functional components, custom hooks return a normal, non-jsx data.</li>
              <li>Unlike normal functions, custom hooks can use other hooks such as useState, useRef… and other custom hooks.</li>
            </div>
          </div>
          <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              3. What is useRef?  
            </div> 
            <div className="collapse-content">
              <p>
               -->Ref means just reference, so it can be a reference to anything (DOM node, Javascript value, etc). The useRef hook returns a mutable object which doesn't re-render the component when it's changed. Think it like useState, but unlike useState, doesn't trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.
               <li>Syntax:const refContainer = useRef(initialValue);</li>
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
               -->The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result. A memoized function remembers the results of output for a given set of inputs. For example, if there is a function to add two numbers, and we give the parameter as 1 and 2 for the first time the function will add these two numbers and return 3, but if the same inputs come again then we will return the cached value i.e 3 and not compute with the add function again. In react also, we use this concept, whenever in the React component, the state and props do not change the component and the component does not re-render, it shows the same output. The useMemo hook is used to improve performance in our React application.
               <li>Syntax:const memoizedValue = useMemo(functionThatReturnsValue, 
                arrayDependencies) </li>
              </p>
              
            </div>
          </div>
        </div>
      </div>
        
        </div>
    );
};

export default Blog;