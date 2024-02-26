import React, { useEffect, useState } from "react";
import Pageheader from "../components/Pageheader";
import Navbar from "../components/Navbar";
import Whatsapp from "../components/Whatsapp";

const SalaryPage = () => {
  const [searchText, setSearchText] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, [searchText]);
  const handleSearch = () => {
    const filteredJobs = jobs.filter(
      (job) =>
        job.jobTitle.toLowerCase().includes(searchText.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchText.toLowerCase())
    );
    setJobs(filteredJobs);
  
    // Tambahkan langkah ini untuk mengembalikan data ke nilai asli setelah pencarian
    if (searchText === "") {
      fetch("jobs.json")
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }
  };

  console.log(searchText);
  return (
    <div>
      
      <Navbar/>
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-24">
      <Pageheader tittle={"Search for companies"} path={"Company"} />

      <div className="mt-5">
        <div className="search-box p-2 text-center mb-2">
          <input
            type="text"
            name="search"
            id="search"
            className="py-2 pl-3 border focus:outline-none
                lg:w-6/12 mb-4 w-full"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue text-white font-semibold px-8  py-2 rounded-sm mb-4"
          >
            Search
          </button>
        </div>
      </div>

      {/* salary display card */}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center'>
        {
            jobs.map((data) => (
              <div key={data.id} className='shadow px-4 py-8 flex items-center'>
              <div className="flex-shrink-0">
                {/* Displaying companyLogo as an image */}
                <img src={data.companyLogo} alt={`${data.companyName} Logo`} className="max-w-full h-auto" />
              </div>
              <div className="ml-4">
                <h4 className='font-semibold text-xl'>{data.companyName}</h4>
                <p className='my-2 font-medium text-blue text-lg'>{`${data.minPrice} - ${data.maxPrice} ${data.salaryType}`}</p>
                <div className='flex flex-wrap gap-4'>
                  <span>{data.jobTitle}</span>
                </div>
              </div>
            </div>
            ))
        }
      </div>
      </div>

      <Whatsapp/>
    </div>
  );
};

export default SalaryPage