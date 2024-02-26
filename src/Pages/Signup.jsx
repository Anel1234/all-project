import React, { useState } from "react";
import wa from "../../public/images/wa.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate(); // Move useNavigate hook outside the component

  const provincesAndCities = [
    {
      province: "Aceh",
      cities: ["Banda Aceh", "Sabang", "Langsa", "Lhokseumawe", "Subulussalam"],
    },
    {
      province: "Bali",
      cities: ["Denpasar", "Badung", "Gianyar", "Tabanan", "Klungkung"],
    },
    // Add more provinces and cities as needed
  ];

  const cities = selectedProvince
    ? provincesAndCities.find((item) => item.province === selectedProvince)
        ?.cities || []
    : [];

    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email); // Assuming email is your state variable for email input
    formData.append("password", password); // Assuming password is your state variable for password input

    const userData = {
      email,
      password: password.toString(),
    };

    if (
      typeof userData.password !== "string" ||
      userData.password.trim() === ""
    ) {
      console.error("Invalid password format");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (result.status) {
        console.log(result.message);
        navigate("/login");
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-24 p-10">
        <h1 className="text-center text-3xl mb-6">
          Lets create your <br /> <span className="text-blue">JobPortal</span>{" "}
          profile
        </h1>

        <form className="mx-auto w-96" onSubmit={handleSignup}>
          {/* Kolom pertama */}
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              id="companyName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email} // Add value attribute
              onChange={(e) => setEmail(e.target.value)} // Add onChange handler to update email state
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password} // Add value attribute
              onChange={(e) => setPassword(e.target.value)} // Add onChange handler to update password state
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
            {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Provinsi
            </label>
            <div className="relative ">
              <select
                id="provinceSelect"
                className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-8 pr-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                  setSelectedProvince(e.target.value);
                  setSelectedCity(""); // Reset selected city when province changes
                }}
              >
                <option value="">Select a province</option>
                {provincesAndCities.map((item, index) => (
                  <option key={index} value={item.province}>
                    {item.province}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-2.5 flex items-center">
                <svg
                  className="h-5 w-5 text-gray-500 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.293 13.707a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L10 11.586 4.707 6.293a1 1 0 00-1.414 1.414l5 5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div> */}

            {/* City Selection */}
            {/* {selectedProvince && (
              <div>
                <label className="listing block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Kota
                </label>
                <div className="relative">
                  <select
                    id="citySelect"
                    className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-8 pr-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    <option value="">Select a city</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 left-0 pl-2.5 flex items-center">
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.293 13.707a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L10 11.586 4.707 6.293a1 1 0 00-1.414 1.414l5 5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )} */}

            {/* Display selected city */}
            {/* {selectedCity && (
              <div className="listing block mt-2 text-sm font-medium text-gray-900 dark:text-white">
                Selected City: {selectedCity}
              </div>
            )} */}
          </div>

          {/* Kolom kedua */}
          <div className="col-span-1">
            {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Last name
            </label>
            <input
              type="text"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
            /> */}

            {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Whatssapp
            </label>
            <input
              type="number"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
            <p>Contoh:827382</p>
            <div className="flex mt-2 bg-green-100 p-3">
              <img src={wa} alt="" className="w-9 h-9 text-center mt-2" />
              <p>
                Pastikan nomor Whatsapp mu aktif agar <br /> dapat dihubungi
                perusahaan
              </p>
            </div> */}
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
          onClick={handleSignup}
        >
          Daftar
        </button>

        <h1 className="mt-6 text-lg font-bold">
          Mau Daftar sebagai admin ? klik di{" "}
          <a href="/signup-admin" className="cursor-pointer text-blue">
            sini
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Signup;
