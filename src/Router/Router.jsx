import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import CreateJob from "../Pages/CreateJob.jsx";

import { createBrowserRouter } from "react-router-dom";
import MyJobs from "../Pages/MyJobs.jsx";
import SalaryPage from "../Pages/SalaryPage.jsx";
import UpdateJob from "../Pages/UpdateJob.jsx";
import JobDetails from "../Pages/JobDetails.jsx";
import Fyp from "../Pages/Fyp.jsx";
import BookMark from "../Pages/BookMark.jsx";
import TabelBerita from "../Pages/TabelBerita.jsx";
import HomePage from "../Pages/HomePage.jsx";
import AdminDashboard from "../Pages/AdminDashboard.jsx";
import Signup from "../Pages/Signup.jsx";
import Login from "../Pages/Login.jsx";
import HomePageJob from "../components/HomePageJob.jsx";
import SignUpAdmin from "../Pages/SignUpAdmin.jsx";
import LoginAdmin from "../Pages/LoginAdmin.jsx";
import ForgotPassword from "../Pages/ForgetPassword.jsx";
import ResetPassword from "../Pages/ResetPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <HomePage />, children: [] }],
  },

  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  { path: "/my-job", element: <MyJobs /> },
  { path: "/post-job", element: <CreateJob /> },
  { path: "/home", element: <Home /> },
  { path: "/salary", element: <SalaryPage /> },
  {
    path: "/edit-job/:id",
    element: <UpdateJob />,
    loader: ({ params }) =>
      fetch(`http://localhost:3000/all-jobs/${params.id}`),
  },
  {
    path: "/job/:id",
    element: <JobDetails />,
  },
  {
    path: "/fyp",
    element: <Fyp />,
  },
  {
    path: "/book-mark",
    element: <BookMark />,
  },
  {
    path: "/berita",
    element: <TabelBerita />,
  },
  {
    path: "/dashboard-admin",
    element: <AdminDashboard />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/homepage-job",
    element: <HomePageJob />,
  },
  {
    path: "/signup-admin",
    element: <SignUpAdmin />,
  },
  {
    path: "/login-admin",
    element: <LoginAdmin />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

export default router;
