import React from "react";
import { BsShop } from "react-icons/bs";
import logo from "../../public/images/Linear.png";
import { useState, useEffect } from "react";
import Card from "./Card";
import Jobs from "../Pages/Jobs";

const RecJobs = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  // console.log(jobs)

  // handle input change
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // filter jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------------------Radio Filtering ---------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------button based filtering ----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  //function for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //function for the previos page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // filtering Inputs items
    if (query) {
      filteredJobs = filteredItems;
    }

    //category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredJobs);
    }

    // slice the data  based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div className="md:grid grid-cols-6 gap-1 lg:px-24 px-4 py-12 w-full shadow">
      <div className="col-span-2 mt-20">
        <h1 className="text-2xl font-bold text-primary mt-16">
          Recommended jobs for you
        </h1>
        <p className="text-lg">Based on your profile and applications</p>
      </div>

      {/* Tambahkan div kosong sebagai spasi */}
      <div className="col-span-1"></div>

      <div className="col-span-3 mt-32 flex bg-slate-300 p-5 rounded-lg">
        <img src={logo} alt="logo" className="w-10 h-10 my-auto mx-5" />
        <div>
          <h3 className="text-lg font-bold text-primary">
            Apakah hasilnya kurang relevan? <br />
            <p className="text-sm">
              Update minat dan prefensi kerjamu untuk rekomendasi yang lebih
              akurat. Tidak sampai 1 menit
            </p>
          </h3>
          <button>
            <h2 className="text-base text-bold text-blue/80">
              UPDATE SEKARANG
            </h2>
          </button>
        </div>
      </div>
      {/* job cards */}
      <div className="col-span-3 bg-white p-4 rounded text-center mt-7">
        <h2 className="text-2xl font-bold">Paling Relevan dengan anda</h2>
        {isLoading ? (
          <p className="font-medium">Loading .....</p>
        ) : result.length > 0 ? (
          <Jobs result={result} />
        ) : (
          <>
            <h3 className="text-lg font-bold mb-2 ">{result.length} Jobs</h3>
            <p>No data found!</p>
          </>
        )}
        {result.length > 0 ? (
          <div className="flex justify-center mt-4 space-x-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="hover:underline"
            >
              Previous
            </button>
            <span className="mx-2">
              Page {currentPage} of{" "}
              {Math.ceil(filteredItems.length / itemsPerPage)}
            </span>
            <button
              onClick={nextPage}
              disabled={
                currentPage === Math.ceil(filteredItems.length / itemsPerPage)
              }
              className="hover:underline"
            >
              Next Button
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* job cards */}
      <div className="col-span-3 bg-white p-4 rounded text-center mt-7  ">
        <h2 className="text-2xl font-bold">Perusahaan Terdekat</h2>

        {isLoading ? (
          <p className="font-medium">Loading .....</p>
        ) : result.length > 0 ? (
          <Jobs result={result} />
        ) : (
          <>
            <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
            <p>No data found!</p>
          </>
        )}
        {result.length > 0 ? (
          <div className="flex justify-center mt-4 space-x-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="hover:underline"
            >
              Previous
            </button>
            <span className="mx-2">
              Page {currentPage} of{" "}
              {Math.ceil(filteredItems.length / itemsPerPage)}
            </span>
            <button
              onClick={nextPage}
              disabled={
                currentPage === Math.ceil(filteredItems.length / itemsPerPage)
              }
              className="hover:underline"
            >
              Next Button
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RecJobs;
