import Banner from "../components/Banner";
import Jobs from "../Pages/Jobs";
import NavSub from "../components/NavSub";
import Whatsapp from "../components/Whatsapp";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Card from "./Card";
import Patner from "./Patner";
import Testimoni from "./Testimoni";

const HomePageJob = () => {
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

  const handleSearch = () => {
    // Tambahkan logika pencarian di sini, menggunakan query dari state
    const filteredJobs = jobsData.filter(
      (job) =>
        job.jobTitle.toLowerCase().includes(query.toLowerCase()) ||
        job.location.toLowerCase().includes(query.toLowerCase())
    );

    // Setel hasil pencarian ke dalam state jobs
    setJobs(filteredJobs);
  };

  return (
    <div>
      <Navbar />

      <NavSub className="mb-8" />
      <Banner
        query={query}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />

      {/* main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-1">
        {/* job cards */}
        <div className="col-span-4 bg-white p-4 rounded">
        {isLoading ? (
          <p className="font-medium">Loading .....</p>
        ) : result.length > 0 ? (
          <Jobs result={result} showBookmark={false} />
        ) : (
          <>
            <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
            <p>No data found!</p>
          </>
        )}

          {/* pagination here */}
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
          <div>

            <Patner />
        <Testimoni />
          </div>
        </div>
        </div>

        <Whatsapp />
      </div>
  );
};

export default HomePageJob;
