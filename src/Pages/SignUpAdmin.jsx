import React, { useState } from "react";

import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const SignUpAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Tambahkan ini

  const handleSignUpAdmin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register-admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.status) {
        console.log(result.message);
        navigate("/login-admin");
      } else {
        console.error(result.message);
        alert("Admin signup failed. Please check your email and password.");
      }
    } catch (error) {
      console.error("Error during admin signup:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-24 p-10">
        <h1 className="text-center text-3xl mb-6">
          Lets create your <br />{" "}
          <span className="text-blue">Admin Account</span>{" "}
        </h1>
        <form
          className="grid grid-cols-2 gap-6 mx-auto"
          onSubmit={handleSignUpAdmin}
        >
          {/* Kolom pertama */}
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email} // Tambahkan ini
              onChange={(e) => setEmail(e.target.value)} // Tambahkan ini
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
              name="password"
              value={password} // Tambahkan ini
              onChange={(e) => setPassword(e.target.value)} // Tambahkan ini
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
          </div>
        </form>
        {/* <div className="flex mt-32">
          <input type="checkbox" />
          <p className="ml-2">
            Yes, fill me in on the latest scoops and job opportunities
          </p>
        </div> */}
        <button
          type="submit"
          className="mx-auto bg-blue py-2 px-20 shadow rounded-lg mt-8"
        >
          Daftar
        </button>
        <h1 className="mt-6 text-lg font-bold">
          Sudah Punya akun ? klik di{" "}
          <a href="/login-admin" className="cursor-pointer text-blue">
            sini
          </a>
        </h1>{" "}
      </div>
    </div>
  );
};

export default SignUpAdmin;
