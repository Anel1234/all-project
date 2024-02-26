import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginAdmin = async (e) => {
    e.preventDefault();

    try {
      // Kirim permintaan login ke server untuk admin
      const response = await fetch("http://localhost:3000/login-admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.status) {
        console.log(result.message);

        // Jika login berhasil, simpan token ke local storage
        const receivedToken = result.token; // Sesuaikan dengan struktur responsenya
        localStorage.setItem("adminToken", receivedToken);

        // Arahkan admin ke dasbor atau halaman utama admin
        navigate("/my-job"); // Sesuaikan path sesuai kebutuhan
      } else {
        console.error(result.message);
        alert("Login admin failed. Please check your email and password.");

        // Handle login failure, show an error message or redirect as needed
      }
    } catch (error) {
      console.error("Error during admin login:", error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-24 p-10">
        <h1 className="text-center text-3xl mb-6">
          Welcome Back <br /> <span className="text-blue">Admin!</span>{" "}
        </h1>

        <form
          className="grid grid-cols-2 gap-6 mx-auto"
          onSubmit={handleLoginAdmin}
        >
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
        </form>

        <button
          type="submit"
          onClick={handleLoginAdmin}
          className="mx-auto bg-blue py-2 px-20 shadow rounded-lg mt-8"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginAdmin;
