import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import AppliedJobs from './components/AppliedJobs'
import Statistics from './components/Statistics'
import Blog from './components/Blog'
import JobDetails from './components/JobDetails'



const router = createBrowserRouter([
  {
    path: '/',
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader: () => fetch('/jobscategory.json')
      },
      {
        path:'jobdetails/:id',
        element:<JobDetails></JobDetails>,
        loader: ({params}) => fetch('/jobscategory.json')
      },
      {
        path: '/statistics',
        element:<Statistics></Statistics>
      },
      {
        path: '/appliedJobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      }

    ]
  
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
