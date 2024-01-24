import App from '../App.jsx'
import Home from '../Pages/Home.jsx';
import About from '../Pages/About.jsx';
import CreateJob from '../Pages/CreateJob.jsx';

import {
    createBrowserRouter,
  } from "react-router-dom";
import MyJobs from '../Pages/MyJobs.jsx';
import SalaryPage from '../Pages/SalaryPage.jsx';
import UpdateJob from '../Pages/UpdateJob.jsx';
import Login from '../components/Login.jsx';
import JobDetails from '../Pages/JobDetails.jsx';
import Fyp from '../Pages/Fyp.jsx';
import BookMark from '../Pages/BookMark.jsx';
import Step from '../Pages/Step.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children: [
        {path: "/", element: <Step/>,
      children: [
        
      ]},
      {path: "/home", element: <Home/>},
        {path: "/post-job", element: <CreateJob/>},
        {path: "/my-job", element: <MyJobs/>},
        {path: "/salary", element: <SalaryPage/>},
        {path: "/edit-job/:id", element: <UpdateJob/>, loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)},
        {
          path: "/job/:id",
          element: <JobDetails/>
        },
        {
          path: "/fyp",
          element: <Fyp/>
        },
        {
          path: "/book-mark",
          element: <BookMark/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    }
  ]);

  export default router