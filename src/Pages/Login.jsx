import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login request to the server
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.status) {
        console.log(result.message);
        // If login is successful, you can redirect the user to a dashboard or home page
        navigate("/home"); // Adjust the path accordingly
        const receivedToken = result.token; // Sesuaikan dengan struktur responsenya
        localStorage.setItem("adminToken", receivedToken);
        alert("Login successfully");
      } else {
        console.error(result.message);
        // Show pop-up according to the error message
        if (result.message === "Email not found") {
          alert("Email not found. Please check your email.");
        } else if (result.message === "Incorrect password") {
          alert("Incorrect password. Please check your password.");
        } else {
          alert("Email and password are incorrect.");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
    // Redirect to forgot password page
    navigate("/forgot-password");
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-24 p-10">
        <h1 className="text-center text-3xl mb-6">
          Welcome Back <br /> <span className="text-blue">User!</span>{" "}
        </h1>

        <form className="grid grid-cols-2 gap-6 mx-auto" onSubmit={handleLogin}>
          {/* Kolom pertama */}
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
          </div>

          {/* Kolom kedua */}
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
          </div>
          <h2 className="forget-pw">
            Forget your password? Click{" "}
            <a href="#" onClick={handleForgetPassword} className="text-blue">
              here
            </a>
          </h2>
        </form>

        <button
          type="submit"
          className="mx-auto bg-blue py-2 px-20 shadow rounded-lg mt-8"
          onClick={handleLogin}
        >
          Login
        </button>

        <h1 className="mt-6 text-lg font-bold">
          Want to login as an admin? Click{" "}
          <Link to="/login-admin" className="text-blue">
            here
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;
