import React from "react";
import wa from '../../public/images/wa.png'

const Step = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-24 p-10">
      <h1 className="text-center text-3xl mb-6">
        Lets create your <br /> <span className="text-blue">JobPortal</span>{" "}
        profile
      </h1>

      <form className="grid grid-cols-2 gap-6 mx-auto">
        {/* Kolom pertama */}
        <div className="col-span-1">
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
          <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Negara/Kota Asal</label>
          <div className="relative ">
            <select
              id="mySelect"
              className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-8 pr-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
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
          <div className="flex mt-32">

          <input type="checkbox" />
          <p className="ml-2">Yes, fill me in on the latest scoops and job opportunities</p>
          </div>
        </div>
        
        {/* Kolom kedua */}
        <div className="col-span-1">
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
          <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
          <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
          <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
          <p>Contoh:827382</p>
          <div className="flex mt-2 bg-green-100 p-3">
            <img src={wa} alt="" className="w-9 h-9 text-center mt-2" />
            <p>Pastikan nomor Whatsapp mu aktif agar <br /> dapat dihubungi perusahaan</p>
          </div>
        </div>

        
      </form>
        <button type="submit" className="mx-auto bg-blue py-2 px-20 shadow rounded-lg mt-8">Daftar</button>
    </div>
  );
};

export default Step;
